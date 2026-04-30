import * as THREE from 'three'
import './style.css'

// ── Three.js particle network background ──────────────────────────────────────
function initParticleNetwork() {
  const canvas = document.getElementById('bg-canvas')
  if (!canvas) return

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 80

  // Particles
  const PARTICLE_COUNT = 180
  const positions = new Float32Array(PARTICLE_COUNT * 3)
  const particleData = []

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const x = (Math.random() - 0.5) * 200
    const y = (Math.random() - 0.5) * 200
    const z = (Math.random() - 0.5) * 100
    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z
    particleData.push({
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.06,
        (Math.random() - 0.5) * 0.06,
        0
      ),
      pos: new THREE.Vector3(x, y, z)
    })
  }

  const particleGeo = new THREE.BufferGeometry()
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const particleMat = new THREE.PointsMaterial({
    color: 0x4cc2ff,
    size: 0.7,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true
  })

  const points = new THREE.Points(particleGeo, particleMat)
  scene.add(points)

  // Connection lines
  const linePositions = new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 6)
  const lineGeo = new THREE.BufferGeometry()
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
  const lineMat = new THREE.LineSegments(
    lineGeo,
    new THREE.LineBasicMaterial({ color: 0x4cc2ff, transparent: true, opacity: 0.12 })
  )
  scene.add(lineMat)

  const CONNECTION_DIST = 30
  let mouseX = 0, mouseY = 0

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 0.3
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.3
  })

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function animate() {
    requestAnimationFrame(animate)

    if (!prefersReducedMotion) {
      // Move particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const d = particleData[i]
        d.pos.add(d.velocity)
        if (Math.abs(d.pos.x) > 100) d.velocity.x *= -1
        if (Math.abs(d.pos.y) > 100) d.velocity.y *= -1
        positions[i * 3] = d.pos.x
        positions[i * 3 + 1] = d.pos.y
        positions[i * 3 + 2] = d.pos.z
      }
      particleGeo.attributes.position.needsUpdate = true

      // Draw connections
      let lineIdx = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dist = particleData[i].pos.distanceTo(particleData[j].pos)
          if (dist < CONNECTION_DIST) {
            linePositions[lineIdx++] = particleData[i].pos.x
            linePositions[lineIdx++] = particleData[i].pos.y
            linePositions[lineIdx++] = particleData[i].pos.z
            linePositions[lineIdx++] = particleData[j].pos.x
            linePositions[lineIdx++] = particleData[j].pos.y
            linePositions[lineIdx++] = particleData[j].pos.z
          }
        }
      }
      lineGeo.attributes.position.needsUpdate = true
      lineGeo.setDrawRange(0, lineIdx / 3)

      // Subtle camera parallax on mouse
      camera.position.x += (mouseX * 10 - camera.position.x) * 0.02
      camera.position.y += (-mouseY * 10 - camera.position.y) * 0.02
      camera.lookAt(scene.position)
    }

    renderer.render(scene, camera)
  }

  animate()
}

// ── Nav toggle ────────────────────────────────────────────────────────────────
function initNav() {
  const toggle = document.querySelector('.nav-toggle')
  const links = document.querySelector('.nav-links')
  const header = document.querySelector('.site-header')

  toggle?.addEventListener('click', () => links?.classList.toggle('open'))

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'))
      if (!target) return
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth' })
      links?.classList.remove('open')
    })
  })

  // Header shrink on scroll
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 60)
  })
}

// ── Scroll reveal ─────────────────────────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        obs.unobserve(e.target)
      }
    }),
    { threshold: 0.12 }
  )
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
}

// ── Animated counter ──────────────────────────────────────────────────────────
function initCounters() {
  const counters = document.querySelectorAll('[data-count]')
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      const el = e.target
      const target = parseInt(el.dataset.count)
      const suffix = el.dataset.suffix || ''
      let current = 0
      const step = target / 60
      const timer = setInterval(() => {
        current = Math.min(current + step, target)
        el.textContent = Math.floor(current) + suffix
        if (current >= target) clearInterval(timer)
      }, 16)
      obs.unobserve(el)
    })
  }, { threshold: 0.5 })
  counters.forEach(c => obs.observe(c))
}

// ── Typed hero text ───────────────────────────────────────────────────────────
function initTyped() {
  const el = document.getElementById('typed-text')
  if (!el) return
  const words = ['DevOps Engineering', 'AI & ML Solutions', 'Cloud Architecture', 'Web Development', 'LLMOps Pipelines']
  let wi = 0, ci = 0, deleting = false

  function tick() {
    const word = words[wi]
    el.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++)
    if (!deleting && ci > word.length) { deleting = true; setTimeout(tick, 1400); return }
    if (deleting && ci < 0) { deleting = false; wi = (wi + 1) % words.length; ci = 0 }
    setTimeout(tick, deleting ? 45 : 85)
  }
  tick()
}

// ── Formspree ─────────────────────────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form')
  const successEl = document.querySelector('[data-fs-success]')
  const errorEl = document.querySelector('[data-fs-error]')
  const submitBtn = form?.querySelector('[data-fs-submit-btn]')
  if (!form) return

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    submitBtn.disabled = true
    submitBtn.textContent = 'Sending...'
    if (errorEl) { errorEl.style.display = 'none'; errorEl.textContent = '' }

    // Clear field errors
    form.querySelectorAll('.field-error').forEach(el => el.textContent = '')
    form.querySelectorAll('[data-fs-field]').forEach(el => el.removeAttribute('aria-invalid'))

    try {
      const res = await fetch('https://formspree.io/f/mykoyzgv', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
      const data = await res.json()

      if (res.ok) {
        form.style.display = 'none'
        if (successEl) successEl.style.display = 'flex'
      } else {
        // Show field-level errors if any
        if (data.errors) {
          data.errors.forEach(err => {
            const fieldErr = form.querySelector(`[data-fs-error="${err.field}"]`)
            const input = form.querySelector(`[name="${err.field}"]`)
            if (fieldErr) fieldErr.textContent = err.message
            if (input) input.setAttribute('aria-invalid', 'true')
          })
        } else {
          if (errorEl) { errorEl.textContent = data.error || 'Submission failed. Try again.'; errorEl.style.display = 'block' }
        }
        submitBtn.disabled = false
        submitBtn.textContent = 'Send Request'
      }
    } catch {
      if (errorEl) { errorEl.textContent = 'Network error. Check connection and try again.'; errorEl.style.display = 'block' }
      submitBtn.disabled = false
      submitBtn.textContent = 'Send Request'
    }
  })
}

// ── Boot ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initParticleNetwork()
  initNav()
  initReveal()
  initCounters()
  initTyped()
  initContactForm()
})
