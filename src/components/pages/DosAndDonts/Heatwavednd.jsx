       import { Link } from "react-router-dom"


const Heatwavednd = () => {
  return (
    <div>
         <p className="bg-teal-600 text-center text-white font-bold px-3 py-2">The 'Do's and Don't' provided by NDMA are as follows:</p>

    <div className="min-h-screen bg-white max-w-6xl mx-auto px-5 py-8">

      <div className="flex flex-col lg:flex-row gap-8">

        {/* ================= LEFT ka hai ================= */}
        {/* ya ha per 2 div hai lef or right ,  main + aside use kiya hu div  */}

        {/* ================= Left SIDEBAR VALA HAI  ================= */}

        <aside className="w-full lg:w-70 flex-shrink-0">

          {/* Do's and Don'ts */}

          <div className="border border-gray-300">

            <h2 className="bg-teal-600 text-white font-bold text-lg px-3 py-2">
              Do's and Don'ts
            </h2>
    
            {[
   ["HEATWAVE", "/heatwavednd"],
  ["FLOOD", "/floodsdnd"],
  ["LANDSLIDE", "/landslidednd"],
  ["EARTHQUAKE", "/earthquakednd"],
  ["CYCLONE", "/cyclonednd"],
  ["COLD WAVE / FROST", "/coldwavednd"],
  ["DROUGHT", "/droughtdnd"],
  ["FIRE", "/firednd"],
  ["LIGHTNING", "/lightningdnd"],
  ["TSUNAMI", "/tsunamidnd"],
  ["BOOKLET", "/bookletdnd"]
            ].map(([name, path]) => (

              <Link
                key={name}
                to={path}
                className="flex items-center gap-3 px-3 py-3 border-b border-gray-200 hover:bg-gray-100"
              >

                <span className="text-sm">
                  {name}
                </span>

              </Link>

            ))}

          </div>

        </aside>



         {/* ================= LEFT ka hai ================= */}

    <main className="flex-1 min-w-0">

  <div className="mb-6">

    <h1 className="text-2xl font-bold text-green-700">
      Do's and Don'ts
    </h1>

    <p className="text-sm text-gray-700 mt-2">
      Heat Wave conditions can result in physiological strain, which could even result in death.
      To minimise the impact during the heat wave and to prevent serious ailment or death because
      of heat stroke, you can take the following measures:
    </p>

  </div>

  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

    <li>
      Avoid going out in the sun, especially between 12.00 noon and 3.00 p.m.
    </li>

    <li>
      Drink sufficient water and as often as possible, even if not thirsty
    </li>

    <li>
      Wear lightweight, light-coloured, loose, and porous cotton clothes.
      Use protective goggles, umbrella/hat, shoes or chappals while going out in sun.
    </li>

    <li>
      Avoid strenuous activities when the outside temperature is high.
      Avoid working outside between 12 noon and 3 p.m.
    </li>

    <li>
      While travelling, carry water with you.
    </li>

    <li>
      Avoid alcohol, tea, coffee and carbonated soft drinks, which dehydrates the body.
    </li>

    <li>
      Avoid high-protein food and do not eat stale food.
    </li>

    <li>
      If you work outside, use a hat or an umbrella and also use a damp cloth on your head,
      neck, face and limbs
    </li>

    <li>
      Do not leave children or pets in parked vehicles
    </li>

    <li>
      If you feel faint or ill, see a doctor immediately.
    </li>

    <li>
      Use ORS, homemade drinks like lassi, rice water, lemon water, buttermilk, etc.
      which helps to re-hydrate the body.
    </li>

    <li>
      Keep animals in shade and give them plenty of water to drink.
    </li>

    <li>
      Keep your home cool, use curtains, shutters or sunshade and open windows at night.
    </li>

    <li>
      Use fans, damp clothing and take bath in cold water frequently.
    </li>

  </ul>


  <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2">
    Tips for treatment of a person affected by a sunstroke:
  </h2>

  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

    <li>
      Lay the person in a cool place, under a shade. Wipe him/her with a wet cloth/wash
      the body frequently. Pour normal temperature water on the head. The main thing is
      to bring down the body temperature.
    </li>

    <li>
      Give the person ORS to drink or lemon sharbat or whatever is useful to rehydrate the body.
    </li>

    <li>
      Take the person immediately to the nearest health centre.
      The patient needs immediate hospitalisation in such cases.
    </li>

  </ul>

</main>



      </div>

    </div>

    </div>
  )
}

export default Heatwavednd