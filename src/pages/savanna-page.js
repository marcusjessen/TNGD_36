import React from "react"
import Savannah from "../components/Savannah"
import SLayout from "../components/slayout"
import Elephant from "../components/Elephant"
import Scroller from "../components/Scroller"
import Scroller2 from "../components/Scroller2"
import Scroller3 from "../components/Scroller3"
import Scroller4 from "../components/Scroller4"
import Scroller5 from "../components/Scroller5"
import Scroller6 from "../components/Scroller6"
import Scroller7 from "../components/Scroller7"
import ElephantEnd from "../components/ElephantEnd"
import Scroller8 from "../components/Scroller8"
import Mara from "../components/Mara"
import SavannahEnd from "../components/SavannahEnd"

const SavannaPage = () => (
  <SLayout>

    <Savannah/>

    <Scroller/>

    <Scroller2/>

    <Scroller3/>
    
    <Elephant/>

    <Scroller4/>

    <Scroller5/>

    <Scroller6/>

    <Scroller7/>

    <Scroller8/>

    <ElephantEnd/>

    <div class="Explore">

        <p class="Explore">
          <hr/>
          <br/>
          Let us take a look at other species <br/> living on the Maasai Mara...
          <br/>
          <br/>
          <hr/>

        </p>

        <p class="Explore">
          The giraffe
          <hr/>
          <br/>
          The Maasai Mara savannah lies 270 kiometres away from the capital of Nairobi. It is home to the maasai giraffe (pictured right) which is the largest subspecies of giraffe.
          <br/>
          <br/>
          Its patterns are irregular compared to those of the reticulated giraffe (which lives in the North of Kenya and in Somalia) and the endangered Rothschild's giraffe (which lives in Kenya and Uganda). The reticulated and the Rothschild's giraffes are the subspecies most often found in zoos.
          <br/>
          <br/>
          Altogether, Kenya is home to three out of six living species of giraffe.
          <br/>
          <br/>
          <hr/>
        </p>

        <p class="Explore">
          The African, or Cape buffalo
          <hr/>
          <br/>
          Along with the elephant, the lion, the leopard and the rhinoceros, the African buffalo is a member of the "Big Five". The Big Five are refered to as such because they are the five hardest animals in Africa to hunt on foot. Despite its orgins in game hunting the name is also used on safari tours.
          <br/>
          <br/>
          Unlike the water buffalo the African buffalo has never been domesticated. This is credited to their unpredictable temperament that also makes them one of the most dangerous animals on the continent of Africa, injuring and killing over 200 people each year.
          <br/>
          <br/>
          In Kenya the averga weight of an adult buffalo is estimated to be 631 kg, while some males have weighed up to 910 kg.
          <br/>
          <br/>
          <hr/>
        </p>

        <p class="Explore">
          The Zebra
          <hr/>
          <br/>
          Zebras are a family of distinctive equid species well-known for their black-and-white stripes. The subspecies present in the Serengeti-Mara ecosystem is known as Grant's zebra. Grant's zebras live in groups up to 18 zebras and are lead be a single stallion. 
          <br/>
          <br/>
          The stripes have many functions. It helps zebras hide in grass by disrupting its outline, it confused predators by motion dazzle, serves as visual cues and identification among its peers, deters flies and may even cool the zebra.
          <br/>
          <br/>
          Zebras are social animals and many attempts have been made to domesticate them. However, because they are unpredictable and have tendencies to panic under stress have made it hard to train them for riding. For this reason the zedonks and donkras (zebras paired with donkeys and donkeys paired with zebras) are prefered over purebred zebras.
          <br/>
          <br/>
          <hr/>
        </p>

        <p class="Explore">
          The Cheetah
          <hr/>
          <br/>
          There are approximately 7, 100 individual in the wild. The Southeast African cheetah is the subspecieis of cheetah inhabiting Maasai Mara.
          <br/>
          <br/>
          The fastest land animal in the world is recognised by their black "tear marks" running down their faces from their eyes to their mouths and their skin, usually covered with nearly 2, 000 black spots. Most of their skin has yellowish colour while their underbelly is white.
          <br/>
          <br/>
          It is not uncommon for adult male cheetahs to form groups to collectively defend their territories. The female cheetahs, however, are typically solitary or with their offspring and are not territorial.
          <br/>
          <br/>
          Unlike many predators in the Maasai Mara the cheetah is easily tamed, as they are generally not aggressive and, in captivity, even affectionate toward humans.
          <hr/>
        </p>

    </div>

        <div class="MaraGroup">

              <Mara 
                image={require('../img/IMG_3809.jpg')}
              />
                
              <Mara
                image={require('../img/dont bend ascend.jpg')}
              />

              <Mara
                image={require('../img/agent provocateur no.2.jpg')}
              />

              <Mara
                image={require('../img/IMG_3891c.jpg')}
              />

        </div>
        
        <div class="SavBack">
          <a href="/"> 
            <hr/>
            Go back to Basecamp 
            <hr/>
          </a>
           <SavannahEnd/>
        </div>

</SLayout>
)


export default SavannaPage