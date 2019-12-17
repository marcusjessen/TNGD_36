import React from "react"
import SLayout from "../components/slayout"
import Scroller9 from "../components/Scroller9"
import Maasai from "../components/Maasai"
import Scroller10 from "../components/Scroller10"
import Scroller11 from "../components/Scroller11"
import Dance from "../components/Dance"
import Scroller12 from "../components/Scroller12"
import Scroller13 from "../components/Scroller13"
import Mara2 from "../components/Mara2"
import Fire from "../components/Fire"
import SavannahEnd from "../components/SavannahEnd"


const MaasaiPage = () => (
    <SLayout>

    <div class="Maasai">
      <Maasai/>
    </div>

      <Scroller9/>
      
      <Scroller10/>

      <Scroller11/>

      <Dance/>

      <Scroller12/>

      <Scroller13/>

      <Fire/>

      <div class="Explore2">

      <p class="Explore2">
        <hr/>
        <br/>
        Let us take a look at other species <br/> living on the Maasai Mara...
        <br/>
        <br/>
        <hr/>

      </p>

      <p class="Explore2">
        Business
        <hr/>
        <br/>
        For decades the Maasai have sold their impressive jewelry to tourists. When doing business with nomadic Maasai it's not entirely rare that one will have to loosely carve the price they wish to pay for the jewelry into the merchants skin. This is due to the fact that the nomadic Maasai often do not use paper.
        <br/>
        <br/>
        Beside selling jewelry and traditional medicine,it's not unusual to find the Maasai living in the national parks and game reserves with permanent employments. Common occupations for Maasai people include farming and restaurant or shop business. It is also not uncommon to see Maasai warriors as security guards, watchmen or guides for tourist camps.
        <br/>
        <br/>
        Many Maasai nowadays have jobs that are not in any way tied to their traditions. As with any other people in Kenya, the Maasai too are engaged in the public and private sectors, governance and commerce. Despite their urban lifestyle, a large number of them can be seen returning to their villages, and put on their shúkà, for example during holidays and important events.
        <br/>
        <br/>
        <hr/>
      </p>

      <p class="Explore2">
        Cattle
        <hr/>
        <br/>
        The Maasai people have been handling cattle for longer than anyone can remember. Cattle, for the Maasai, is currency and many conflicts are settled with a payment of cattle. A man's wealth is measured in terms of cattle and number of children. A respectable man should own at least 50 cattle. 
        <br/>
        <br/>
        Cattle of different source is also their primary source of food. They eat the meat of cows, goats and lambs, drink milk and sometimes blood. The blood of the cow is believed to make the Maasai strong, and is therefore only consumed during special ceremonies. 
        <br/>
        <br/>
        Cow blood is extracted by swelling the jugular artery on the cow's neck. This is done by tightening a noose around its neck. They then fire a short, blunt arrow from a loosely-strung bow that punctures the vein. The blood is collected in a gourd and the bleeding is stopped with a wad of dung and mud.
        <br/>
        <br/>
        Maasai religion says that God gave the Maasai people all the cattle on earth. Because of this they view cattle-rustling (the act of stealing cattle) from other tribes as a matter of taking back what is rightfully theirs. This practice is not as common in the modern day.
        <br/>
        <br/>
        Today the warriors are very involved in cattle trading and have developed and improved stock through trades. They now prefer trade over rustling cattle. The Maasai are also growning food such as rice, potatoes and cabbage.
        <br/>
        <br/>
        <hr/>
      </p>

    
      </div>

      <div class="MaraGroup2">

            <Mara2 
              image={require('../img/IMG_8838.jpg')}
            />
              
            <Mara2
              image={require('../img/IMG_8855.jpg')}
            />

            <Mara2
              image={require('../img/IMG_8857.jpg')}
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
  


export default MaasaiPage