
// const details = {
//     headache: {
//         title: "Headache",
//         Cause: "lack of sleep,dehydration,caffeine withdrawal,alcohol use,nutrient deficiency,undereating,nutrient deficiency",
//         Try: "Relaxing in a dark room, using a cold compress, smelling some peppermint or lavender essential oils, drinking some caffeine, and avoiding loud noises may also help reduce headache severity.",
//         TestsAndDiagnosis: "neuroimaging, cerebrospinal fluid (CSF) examination, and blood tests, like ESR and MRI Brain Scan",
//         image: "https://www.verywellhealth.com/thmb/o--Qpug5bCSJOoMifybHOZn2OhU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Migraine-relief-at-home-alternative-treatments-5202376_fina_rev-9b73eb0c69ee4350bf82df23757a2c28.jpg"

//     },
//     hairLoss: {
//         Cause: "lorem ",
//         Try: "egg",
//         TestsAndDiagnosis: "xyx",
//         image: ""
//     }
// }
// var searchItem = document.getElementById("search-bar")
var solution = document.getElementById("show-remedy")

function showDetails(disease) {
    if (disease == "headache" ){
        solution.innerHTML = `<div class="info Headache">
        <h2>Headache</h2>
        <img src="https://www.verywellhealth.com/thmb/o--Qpug5bCSJOoMifybHOZn2OhU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Migraine-relief-at-home-alternative-treatments-5202376_fina_rev-9b73eb0c69ee4350bf82df23757a2c28.jpg"> <br><br>
        <h3>Causes</h3>
        <p>lack of sleep,dehydration,caffeine withdrawal,alcohol use,nutrient deficiency,
            undereating,nutrient deficiency</p> <br><br>
        <h3>Try</h3>
        <p>Relaxing in a dark room, using a cold compress, smelling some peppermint or lavender essential oils, drinking
            some caffeine, and avoiding loud noises may also help reduce headache severity.
        </p>
    </div>`}
    else if (disease == "hairLoss") {
        solution.innerHTML = `<div class="info HairLoss">
        <h2>Hair Loss</h2>
        <img src ="https://glammpop.com/wp-content/uploads/2019/10/Home-remedy-for-hair-loss.jpg">
        <br><br>
        <h3>Causes</h3>
        <p>Major surgery, major illness, sudden blood loss. Severe emotional stress. Crash diets, especially those that
            do not contain enough protein. Drugs, including retinoids, beta-blockers, calcium channel blockers, certain
            antidepressants</p><br><br>
        <h3>Try</h3>
        <ul>
            <h3> Eggs </h3>
            <li>Beat 1 or 2 eggs together.
                Apply the mixture to the scalp and damp hair.
                Leave it on the scalp for about 30 minutes.
                Wash the hair thoroughly with warm water and mild shampoo.</li>
            </li>
            <h3>Olive oil / coconut oil </h3>
            <li>
                Heat the oil to body temperature.
                Massage the warm oil into the scalp and hair.
                Leave it on for about 30–45 minutes.
                Wash it out with mild shampoo.
            </li>
            </li>
        </ul>
    </div>`
    } else if (disease == "dandruff") {
        solution.innerHTML = `<div class="info Dandruff ">
        <h2>Dandruff</h2>
        <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.yesmadam.com/blog/wp-content/uploads/2022/12/Info.jpg">
        <br><br>
        <h3>Causes</h3>
        <p>seborrheic dermatitis
            dry skin
            allergic reactions to hair and skin products
            other skin conditions, such as eczema or psoriasis
            diet
            overgrowth of a yeast-like fungus called Malassezia
            </p> <br><br>
        <h3>Try</h3>
        <p> In a glass bowl, dilute the lemon juice with water and keep aside.
            Mix curd and olive oil together and apply it on your strands after shampooing.
            Leave it on for 20 minutes before washing it off with water. Finally, rinse your hair with the lemon juice solution and towel dry your hair.</p>
    </div>`
    } else if (disease == "eyeIrritation") {
        solution.innerHTML = `<div class="info Eye ">
        <h2>Eye Irritation</h2>
        <img src="https://www.top10homeremedies.com/wp-content/uploads/2018/05/home-remedies-for-eye-pain-main.jpg">
        <br><br>
        <h3>Causes</h3>
        <p>Eye irritation can be caused by dry air, wind or pollen. Chemicals like cigarette smoke, dust, cleaners, and strong smells can also irritate your eyes. Staring at a screen for a long time can also make your eyes sore. Try to blink more often. </p><br><br>
        <h3>Try</h3>
        <p> Apply warm compresses to your affected eye. Rinse your eye out with water. Take over-the-counter (OTC) antihistamines or allergy medications to soothe itchy eyes. Use OTC artificial tear drops to lubricate dry eyes.</p>
    </div>
  `}
    else if (disease == "mouthUlcer") {
        solution.innerHTML = `<div class="info Mouth ">
        <h2>Mouth Ulcer</h2>
 <img src="https://dentalgalaxy.in/wp-content/uploads/2018/10/3fb10e07b16ead2b688599b18d8c91f5.png">
        <br><br>
        <h3>Causes</h3>
        <p> Any injury or damage to the mouth, such as from sharp teeth, dentures, or braces.
            a reaction to certain foods, drugs or toothpastes.
            some infections and diseases, like coeliac disease.
            certain medications and medical treatments.
            vitamin deficiencies.
            </p><br><br>
        <h3>Try</h3>
        <p>Apply antiseptic gel to the ulcers. Rinse your mouth out with warm, slightly salted water, keeping the rinse in your mouth for up to 4 minutes at a time. Repeat four times daily. Use an alcohol-free medicated (preferably containing chlorhexidine gluconate) mouthwash twice daily. </p>
    </div>`
    } else if (disease == "acne") {
        solution.innerHTML = `<div class="info Acne ">
        <h2>Acne</h2>
 <img src ="https://salinetherapy.com/wp-content/uploads/2022/09/acnee.jpg">
        <br><br>
        <h3>Causes</h3>
        <p> Hormonal changes that make the skin oilier. ...
            Greasy or oily cosmetic and hair products.
            Certain drugs (such as steroids, testosterone, estrogen, and phenytoin). ...
            Heavy sweating and humidity.
            Excessively touching, resting on, or rubbing the skin.
            </p>
            <br><br>
        <h3>Try</h3>
        <li>fresh turmeric and powdered turmeric help treat acne effectively. However, if you have a lot of time, use crushed fresh turmeric and then apply it directly on the acne-prone skin so that the essence from turmeric is easily absorbed into the skin, effectively treating dark spots.</li>
        <li>Mix 1 part apple cider vinegar and 3 parts water (use more water for sensitive skin). After cleansing, gently apply the mixture to the skin using a cotton ball. Let it sit for 5 to 20 seconds, rinse with water and pat dry. Repeat this process 1 to 2 times per day, as needed.
        </li>
    </div>`
    } else if (disease == "skinTan") {
        solution.innerHTML = `<div class="info skinTan ">
        <h2>Skin Tanning</h2>
        <img src="https://i.pinimg.com/736x/bb/0a/95/bb0a959fbcebeae7936af7aa5110f907.jpg">
        <br><br>
        <h3>Causes</h3>
        <p>Tanning is mostly visible on uncovered parts of the body such as the face, arms, hands, legs, feet, back and neck. The leading causes of skin tanning are: UV-A Exposure: UV-A rays are dangerous because they are capable of penetrating the deeper skin layers, causing cellular damage.
        </p>
            <br><br>
        <h3>Try</h3>
        <li>fresh turmeric and powdered turmeric help treat acne effectively. However, if you have a lot of time, use crushed fresh turmeric and then apply it directly on the acne-prone skin so that the essence from turmeric is easily absorbed into the skin, effectively treating dark spots.</li>
        <li>Mix 1 part apple cider vinegar and 3 parts water (use more water for sensitive skin). After cleansing, gently apply the mixture to the skin using a cotton ball. Let it sit for 5 to 20 seconds, rinse with water and pat dry. Repeat this process 1 to 2 times per day, as needed.
        </li>
    </div>`
    } else if (disease == "acidity") {
        solution.innerHTML = `<div class="info acidity ">
        <h2>Acidity</h2>
        <img src="http://media.trusper.net/u/88ee0d95-3bc4-4f13-9945-fd568942ce9c.jpg">
        <br><br>
        <h3>Causes</h3>
        <p>Tanning is mostly visible on uncovered parts of the body such as the face, arms, hands, legs, feet, back and neck. The leading causes of skin tanning are: UV-A Exposure: UV-A rays are dangerous because they are capable of penetrating the deeper skin layers, causing cellular damage.
        </p>
            <br><br>
        <h3>Try</h3>
        <li>fresh turmeric and powdered turmeric help treat acne effectively. However, if you have a lot of time, use crushed fresh turmeric and then apply it directly on the acne-prone skin so that the essence from turmeric is easily absorbed into the skin, effectively treating dark spots.</li>
        <li>Mix 1 part apple cider vinegar and 3 parts water (use more water for sensitive skin). After cleansing, gently apply the mixture to the skin using a cotton ball. Let it sit for 5 to 20 seconds, rinse with water and pat dry. Repeat this process 1 to 2 times per day, as needed.
        </li>
    </div>
`

    } else if (disease == "cough") {
        solution.innerHTML = `<div class="info acidity ">
        <h2>Cough</h2>
        <img src="https://1.bp.blogspot.com/-6nAedqu2aIY/WpljkabIqMI/AAAAAAAAFFs/xix5JxTyclUmgrKNXvlQEq2TihsVwCqPACLcBGAs/s1600/home_remedies_for_Cough.jpg">
        <br><br>
        <h3>Causes</h3>
        <p>Tanning is mostly visible on uncovered parts of the body such as the face, arms, hands, legs, feet, back and neck. The leading causes of skin tanning are: UV-A Exposure: UV-A rays are dangerous because they are capable of penetrating the deeper skin layers, causing cellular damage.
        </p>
            <br><br>
        <h3>Try</h3>
        <li>fresh turmeric and powdered turmeric help treat acne effectively. However, if you have a lot of time, use crushed fresh turmeric and then apply it directly on the acne-prone skin so that the essence from turmeric is easily absorbed into the skin, effectively treating dark spots.</li>
        <li>Mix 1 part apple cider vinegar and 3 parts water (use more water for sensitive skin). After cleansing, gently apply the mixture to the skin using a cotton ball. Let it sit for 5 to 20 seconds, rinse with water and pat dry. Repeat this process 1 to 2 times per day, as needed.
        </li>
    </div>
`

    } else if (disease == "weightGain") {
        solution.innerHTML = `<div class="info acidity ">
        <h2>Weight Gain</h2>
        <img src="https://www.planetayurveda.com/pa-wp-images/Weight-Gain-Home-Remedies.jpg">
        <br><br>
        <h3>Causes</h3>
        <p>Tanning is mostly visible on uncovered parts of the body such as the face, arms, hands, legs, feet, back and neck. The leading causes of skin tanning are: UV-A Exposure: UV-A rays are dangerous because they are capable of penetrating the deeper skin layers, causing cellular damage.
        </p>
            <br><br>
        <h3>Try</h3>
        <li>fresh turmeric and powdered turmeric help treat acne effectively. However, if you have a lot of time, use crushed fresh turmeric and then apply it directly on the acne-prone skin so that the essence from turmeric is easily absorbed into the skin, effectively treating dark spots.</li>
        <li>Mix 1 part apple cider vinegar and 3 parts water (use more water for sensitive skin). After cleansing, gently apply the mixture to the skin using a cotton ball. Let it sit for 5 to 20 seconds, rinse with water and pat dry. Repeat this process 1 to 2 times per day, as needed.
        </li>
    </div>
`

    } else if (disease == "weightLoss" ) {
        solution.innerHTML = `<div class="info acidity ">
        <h2>Weight Loss</h2>
        <img src="https://www.247healthblog.com/wp-content/uploads/2018/10/Home-remedies-for-weight-loss-1024x541.jpg">
        <br><br>
        <h3>Causes</h3>
        <p>Tanning is mostly visible on uncovered parts of the body such as the face, arms, hands, legs, feet, back and neck. The leading causes of skin tanning are: UV-A Exposure: UV-A rays are dangerous because they are capable of penetrating the deeper skin layers, causing cellular damage.
        </p>
            <br><br>
        <h3>Try</h3>
        <li>fresh turmeric and powdered turmeric help treat acne effectively. However, if you have a lot of time, use crushed fresh turmeric and then apply it directly on the acne-prone skin so that the essence from turmeric is easily absorbed into the skin, effectively treating dark spots.</li>
        <li>Mix 1 part apple cider vinegar and 3 parts water (use more water for sensitive skin). After cleansing, gently apply the mixture to the skin using a cotton ball. Let it sit for 5 to 20 seconds, rinse with water and pat dry. Repeat this process 1 to 2 times per day, as needed.
        </li>
    </div>
`
    }
}




