import { useEffect, useRef } from 'react'
import * as THREE from 'three'

import earthTexture from '../../earth-background/assets/earth.png'

const EarthBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(2.45, 64, 64),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(earthTexture),
      }),
    )

    scene.add(earth)
    camera.position.z = 9

    const resize = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      const isDesktop = width > 700
      earth.position.x = isDesktop ? (width > 1100 ? 2.65 : 2.25) : 0
      earth.position.y = isDesktop ? 0 : -1.5
      earth.scale.setScalar(isDesktop ? 1.12 : 0.72)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(width, height, false)
    }

    let animationFrame
    const animate = () => {
      earth.rotation.y += 0.0015
      renderer.render(scene, camera)
      animationFrame = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize)
    resize()
    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      earth.geometry.dispose()
      earth.material.map?.dispose()
      earth.material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <section
      className='relative m-2 h-[560px] w-[calc(100%-1rem)] overflow-hidden rounded-sm border border-white/55 bg-emerald-900/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_10px_26px_rgba(0,60,35,0.2)] backdrop-blur-[1px] sm:m-4 sm:h-[600px] sm:w-[calc(100%-2rem)]'
      aria-label='Rotating Earth background'
    >
      <span className='absolute left-3 top-3 z-20 h-3 w-3 rounded-full border border-white/80 bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.9)]' />
      <span className='absolute right-3 top-3 z-20 h-3 w-3 rounded-full border border-white/80 bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.9)]' />
      <span className='absolute bottom-3 left-3 z-20 h-3 w-3 rounded-full border border-white/80 bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.9)]' />
      <span className='absolute bottom-3 right-3 z-20 h-3 w-3 rounded-full border border-white/80 bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.9)]' />
      <canvas ref={canvasRef} className='pointer-events-none absolute inset-0 z-0 block h-full w-full' />
      <div className='relative z-10 flex h-full flex-col px-6 pt-10 pb-28 text-white sm:px-12 sm:pt-14 sm:pb-32 lg:px-16'>
        <div className='max-w-[34rem] sm:max-w-[30rem] lg:max-w-[34rem]'>
          <p className='text-xs font-semibold uppercase tracking-[0.35em] sm:text-sm'>Disaster Awareness</p>
          <h1 className='mt-5 text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl'>
            Stay Safe.<br />
            <span className='sm:whitespace-nowrap'>Stay <span className='text-yellow-300'>Prepared.</span></span>
          </h1>
          <p className='mt-6 max-w-[29rem] text-base leading-7 sm:text-xl sm:leading-9'>
            Learn essential safety tips, emergency information, and simple steps to protect yourself, your family, and your community.
          </p>
      
<a
  href="#citizen-corner"
  className="group relative mt-7 inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-white/80 hover:bg-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)] sm:px-6 sm:py-3.5 sm:text-base"
>
  {/* Shine Animation */}
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

  {/* Text */}
  <span className="relative tracking-wide">
    Explore Safety Tips
  </span>

  {/* Arrow Logo */}
  <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-emerald-700">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
</a>

        </div>

        {/* <div className='absolute bottom-8 left-6 right-6 flex max-w-[42rem] flex-wrap items-center gap-4 text-sm font-semibold sm:bottom-10 sm:left-12 sm:right-auto sm:gap-10 sm:text-lg lg:left-16'>
          <span className='flex items-center gap-2'>Shield <span className='text-2xl text-yellow-300'>✓</span> Be Aware</span>
          <span className='hidden h-8 w-px bg-white/40 sm:block' />
          <span className='flex items-center gap-2'>People <span className='text-2xl text-yellow-300'>+</span> Be Prepared</span>
          <span className='hidden h-8 w-px bg-white/40 sm:block' />
          <span className='flex items-center gap-2'>Heart <span className='text-2xl text-yellow-300'>♥</span> Stay Safe</span>
        </div> */}
      </div>
    </section>
  )
}

export default EarthBackground