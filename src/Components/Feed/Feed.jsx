import React, { useState, useEffect } from "react";
import "./Feed.css";
const Feed = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const headerElement = document.querySelector(".header");
    if (headerElement) {
      const height = headerElement.offsetHeight;
      setHeaderHeight(height);
    }
  }, []);

  return (
    <section className="feed" style={{ paddingTop: `${headerHeight}px` }}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab illo
        voluptate dignissimos aut quasi quaerat, molestiae ipsum, temporibus
        nihil maxime sunt nisi, debitis consequatur beatae necessitatibus!
        Beatae doloribus suscipit exercitationem eligendi eum nostrum odit
        delectus nemo eos quia, magnam accusantium corrupti itaque? Eos dolorum
        sequi laboriosam alias commodi aliquam, laborum nisi repudiandae aliquid
        deleniti autem iure nulla id maiores dolores placeat ut quo dicta
        aperiam eligendi illo ipsum, accusamus illum! Ex molestias possimus,
        modi voluptatibus numquam ea dignissimos praesentium impedit mollitia,
        ut laborum corrupti, earum sapiente natus recusandae. Corporis odio
        ducimus iusto soluta vitae earum totam, ex quam possimus culpa! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        laboriosam ipsum esse nostrum officiis cum nemo ipsa repellendus,
        commodi blanditiis hic nobis perspiciatis sapiente fuga, molestias
        deserunt voluptatum cumque? Aliquid adipisci explicabo, culpa, molestias
        non distinctio error veritatis architecto saepe libero odit molestiae
        laborum qui labore minus iure praesentium? Soluta natus molestias beatae
        impedit numquam illum quis sapiente deleniti amet perspiciatis minima
        adipisci molestiae in aliquam laboriosam excepturi, sunt blanditiis.
        Quae ab architecto consectetur molestiae earum culpa consequatur facere
        quis officia maiores quisquam, incidunt rerum eaque alias ipsa
        repellendus nemo fugiat odit, delectus dolor. Odio officiis atque qui
        nihil repellendus, enim molestiae ad eum quas neque voluptate totam
        possimus accusantium cumque tempora consequatur saepe blanditiis
        incidunt ipsa iusto deleniti facilis. Optio animi facere nulla doloribus
        sint soluta, dolore odio unde temporibus dolorum omnis doloremque quidem
        officiis tenetur excepturi? Et quis velit quos magnam laboriosam sit
        unde fuga dolores? Cupiditate iusto quis iste eum fuga optio similique
        ducimus est mollitia dignissimos, possimus ratione dolores assumenda
        alias consequuntur id a? Est numquam possimus ratione officia laboriosam
        sit suscipit, ea necessitatibus libero nulla quae fuga voluptatum, earum
        quidem, maiores sed minus cumque incidunt perferendis nostrum
        praesentium sunt recusandae? Aut aperiam, blanditiis repellat amet,
        accusamus nam magnam id iure sit eos aspernatur nisi voluptatibus cumque
        deserunt nostrum veniam officia mollitia adipisci impedit quae, unde
        debitis delectus nemo. Placeat fugiat ipsum minima, perferendis impedit
        hic atque ea eum aliquid odit dolorem. Esse, veniam atque tenetur
        similique saepe modi impedit sed ipsa sequi, neque, magnam sit. Eligendi
        accusantium doloremque suscipit quas et deserunt iusto, quo ab tempora
        quos voluptates, iste itaque animi molestias eum. Debitis dignissimos
        dicta quidem dolore sequi! Sed sapiente soluta autem debitis alias
        minima doloribus aliquid tempore facilis nostrum blanditiis ea magni,
        voluptates aliquam, laudantium quos illo nisi asperiores sunt impedit
        nam commodi. Voluptatum esse corrupti architecto quidem doloribus fugiat
        eveniet iure ducimus, neque et voluptas a nisi qui dolore sed
        repellendus iusto ab aliquid consequuntur minima doloremque quos nemo.
        Numquam et sint ea corporis est temporibus placeat. Aspernatur error
        nemo quam, non earum natus facere dolorum tempora ipsa cumque unde ex,
        libero praesentium tempore atque dolorem magni nostrum saepe neque
        minima repellendus? Id, delectus! Suscipit sequi, vel laudantium eaque
        consequuntur voluptatibus magnam, est cumque itaque sunt necessitatibus,
        alias accusantium temporibus praesentium facilis autem voluptatum nobis
        corporis libero dignissimos expedita odit unde asperiores? Ad voluptates
        provident, quia ratione voluptas omnis enim? Fugiat a excepturi nobis
        expedita reprehenderit, aperiam, natus rem esse earum facere repellat
        impedit distinctio numquam accusamus eius neque aspernatur saepe.
        Reprehenderit quasi delectus quod quisquam in magni facilis quos
        molestiae quas aliquam labore aperiam at repellendus ipsum, iusto
        molestias odit praesentium ipsa libero illum, suscipit exercitationem.
        Magnam neque vero sit aliquid cumque tempora nisi, hic fugit unde
        deleniti error amet! Dolore sapiente blanditiis nobis ipsa inventore
        ducimus obcaecati aspernatur illum, porro incidunt culpa veniam
        reprehenderit earum sunt, quibusdam dolor alias harum hic tempora,
        officia optio doloremque molestiae error eius! Tempora numquam quisquam
        porro sint repellendus nihil nam obcaecati! Enim perspiciatis
        consequatur atque tempora, nisi, voluptates harum dignissimos eos
        voluptas, ab aspernatur nam non. At, sunt necessitatibus suscipit
        accusantium, enim ducimus natus, quis hic ea corporis iusto eum.
        Sapiente quos accusantium illo ullam a aliquam neque, suscipit sint
        mollitia rem vero, in sed est magnam facilis quod beatae non dignissimos
        consequatur dolore at veniam obcaecati enim? Assumenda, commodi fugit.
        Perspiciatis ducimus reiciendis id tenetur, sit numquam? Modi obcaecati
        quibusdam voluptatibus ratione officiis nisi atque nostrum perspiciatis
        mollitia aspernatur! Nam id maiores et quibusdam distinctio aspernatur
        placeat eligendi rerum numquam! Accusantium magnam ipsa dolorem
        voluptatibus, ex odit eius! Libero ipsa odit optio rerum, molestiae illo
        dolores numquam nobis accusamus ullam quos tenetur deserunt maiores
        iusto magni ipsum? In officiis optio deserunt modi hic? Laborum
        quibusdam tenetur reiciendis earum eveniet pariatur ipsum error eos
        rerum repellat perspiciatis, magnam modi, facere repellendus distinctio
        labore ut iure dolorum qui magni tempore natus debitis quo. Animi culpa
        cupiditate cumque omnis, repudiandae aspernatur. Nisi ad odit
        perferendis nobis, asperiores enim aliquid quos molestiae assumenda
        maxime facere aliquam laudantium delectus beatae dicta repellat modi
        vero perspiciatis voluptate quasi. Tempore fuga aspernatur molestiae
        commodi est quis tenetur nesciunt hic ullam deserunt eveniet doloremque
        exercitationem fugiat repellat tempora impedit sit, facilis nisi sequi
        facere natus voluptate quos? Fuga rerum necessitatibus asperiores
        placeat ratione reiciendis modi aut dolore, eos nihil ab alias quo
        eveniet corporis eum doloribus deleniti saepe ipsam esse. Aliquam quo
        facere tempore mollitia reiciendis illo iste harum porro pariatur
        nesciunt, voluptatem impedit et voluptatum illum maiores fuga quae
        cumque rerum quia animi, quos debitis? Hic sunt eius modi? Libero
        mollitia qui culpa perspiciatis officiis deserunt alias voluptatibus
        architecto voluptate iste ipsa magni quae corporis dolores, nihil id
        tenetur. Voluptatem provident autem tempore. In nostrum eligendi
        excepturi inventore saepe! Omnis, esse cumque! Dolorem minima molestiae
        nobis voluptates aliquid iusto itaque. Natus nulla excepturi, tempore
        architecto neque ratione nisi sequi maiores cupiditate perspiciatis
        aliquam sunt reprehenderit accusantium porro doloremque, sit vero
        repudiandae dolor facere quia voluptatum esse non nemo quisquam.
        Temporibus, quia unde praesentium expedita, delectus sunt impedit labore
        sapiente cum obcaecati iusto porro cumque et? Pariatur veritatis
        expedita quibusdam, vero obcaecati iste quam natus reprehenderit animi
        hic architecto accusantium nostrum alias adipisci porro. Deserunt vel
        repudiandae harum, architecto fugit iure laborum sint odit quam amet
        excepturi eligendi est aperiam iste fuga modi reprehenderit possimus
        veritatis praesentium nemo? Non minima doloribus eos dolores
        consequatur. Earum reprehenderit doloremque dolor. Reiciendis id
        pariatur numquam! Laborum libero repellendus cum deleniti aut! Suscipit
        dolor repellat aperiam dignissimos laborum saepe optio tenetur iure
        nobis maxime atque cum blanditiis fuga eveniet veritatis dolorum, quas,
        voluptate placeat vel totam ea corrupti. Deleniti temporibus
        necessitatibus non laudantium tenetur perspiciatis sunt dignissimos,
        ipsam maiores quis error ea eaque? Dolorum alias similique commodi
        tempore! Ducimus voluptates culpa porro delectus, aspernatur explicabo
        ut temporibus nam. Explicabo sint atque nisi placeat culpa perspiciatis.
        Consequuntur id vitae mollitia saepe cum aut, at obcaecati hic amet
        optio suscipit fugit nam! Amet nulla voluptate quisquam reiciendis
        libero necessitatibus quas hic praesentium. Deleniti iure quisquam
        provident nobis. Unde quis, hic perspiciatis repellendus earum eum
        exercitationem amet quia voluptatem, obcaecati, aspernatur perferendis
        reprehenderit labore nesciunt nostrum consectetur iure nihil laborum a
        ratione nemo molestiae odio accusamus. Itaque quisquam et adipisci a
        nesciunt repellendus perspiciatis incidunt non exercitationem magnam quo
        accusantium, aspernatur possimus provident corporis veritatis quia
        aperiam delectus quam, sit ratione perferendis. Harum eligendi at error
        ad consequatur placeat nulla ullam! Cumque beatae consequatur, dicta
        molestiae sit numquam expedita vitae quisquam voluptatum hic aut facilis
        officiis ea iusto fugiat quod quaerat dolore. Corrupti a eligendi
        aliquam quo officia repudiandae laborum cupiditate autem repellat eum
        incidunt impedit rem architecto quas excepturi animi, quaerat
        exercitationem fugit provident aut illum harum expedita ex fuga. Saepe
        aspernatur nulla aut modi animi non velit temporibus vero similique
        asperiores facere ipsam alias placeat, voluptatem nesciunt, iusto rem
        esse eligendi? Soluta, reprehenderit amet unde voluptas numquam quo
        accusamus, adipisci sapiente cumque blanditiis vitae laudantium odio
        quae, sint ratione! Vel dolorem, tempora sint deleniti nemo numquam
        consectetur cumque velit porro, fugiat nostrum quidem. Officiis facilis
        exercitationem debitis dolore iure perspiciatis in ipsum dolorem
        reprehenderit cum consequatur, praesentium unde, corrupti neque ut esse!
        Minima, sequi. Ullam, blanditiis nostrum similique rem laboriosam earum
        doloribus molestias dolorem cum assumenda dolorum consequatur harum
        asperiores, sapiente eveniet eum illum sequi numquam nobis veritatis id!
        Molestiae aliquam ut blanditiis sequi ea iste sit quibusdam sunt dolorum
        deserunt similique, voluptas suscipit voluptatem eius veritatis
        perferendis aspernatur incidunt porro impedit pariatur sed qui
        cupiditate labore libero. Officiis soluta expedita sint quia sapiente
        facilis beatae voluptatem delectus iusto distinctio error libero
        repellendus, facere dignissimos aspernatur. Dignissimos, quo quod totam
        enim accusamus eaque quaerat molestias hic odio maiores ut fugit
        temporibus, magnam nostrum? Dolorum sapiente totam perferendis, velit
        iure voluptas minus repellendus autem tempore! Debitis, sit accusantium?
        Voluptates vero consectetur molestiae totam quod ad aliquid iusto,
        consequatur asperiores quia distinctio nobis delectus laboriosam fuga
        reiciendis veritatis quidem ut vel officia nemo debitis. Odio hic
        tempore explicabo, voluptate, maiores eius velit illo expedita veniam
        aspernatur vitae ut quasi obcaecati facere. Nam maiores assumenda
        aperiam ea dolor nesciunt commodi? Et veniam voluptates assumenda
        tempora praesentium repudiandae quasi debitis cum dolores soluta
        voluptatibus iusto eos, quo pariatur delectus itaque amet numquam harum
        non! Aspernatur, sunt. Temporibus similique nihil eius impedit,
        doloribus quisquam excepturi iste sint necessitatibus aperiam voluptates
        delectus accusantium culpa, expedita, consequuntur eos tenetur
        consectetur ipsum doloremque exercitationem modi fugit numquam
        reprehenderit ratione? Voluptatum eaque nisi harum quibusdam aperiam
        delectus quae. Tempora labore, ducimus voluptates esse exercitationem
        provident cumque dolor modi corrupti ipsa voluptatum nulla quaerat neque
        consectetur natus eius officiis perspiciatis molestias. Saepe eum,
        voluptas assumenda nihil delectus voluptate fugit odit illo aut beatae
        soluta reiciendis consequatur reprehenderit libero ratione earum
        quaerat. Officiis quia sit quos impedit hic enim nostrum doloremque
        placeat incidunt eligendi iusto rerum quaerat odit cupiditate molestiae
        fuga at, minus, provident porro. Repellat labore quaerat dolores
        provident in? Repellat, et assumenda velit aut commodi tempore ratione,
        at inventore recusandae facilis dolor sequi? Nam, iste labore odio iusto
        inventore reiciendis aspernatur quisquam necessitatibus natus ab
        possimus veniam, alias adipisci voluptatibus culpa totam non libero
        illum beatae commodi laudantium sapiente tempora vitae? Est rerum porro
        similique ipsam cum quidem consequatur sint nostrum voluptate? Incidunt
        eos provident perferendis aliquam, sed quaerat quis quae repudiandae
        voluptatem culpa cupiditate molestiae, laboriosam sunt eaque accusamus,
        similique nulla magnam. Reprehenderit eos sunt quos vitae culpa nisi
        doloremque iste veritatis hic corrupti aspernatur enim sequi tenetur
        tempore soluta, quaerat itaque ullam error nihil tempora excepturi
        impedit repellendus nam esse. Autem laborum modi, aperiam dolor deserunt
        sequi, cumque odit laboriosam iusto quos nisi alias ut numquam, quidem
        repellat assumenda. Nisi, consequuntur quae quo voluptatibus tempore
        blanditiis quaerat tempora vel velit quibusdam sit. Ipsum, quam magnam a
        qui impedit nobis quasi nesciunt consequatur quis sapiente laborum magni
        vel fugit. Provident deserunt dolor laudantium nam voluptatem laborum
        quod quos quam illum esse. Velit facilis cumque totam iusto ratione,
        perspiciatis ut molestias et omnis similique eaque. Omnis id nisi,
        consequatur assumenda, ab aut distinctio libero perspiciatis reiciendis
        repellat velit odio officiis culpa temporibus. Commodi corrupti laborum
        blanditiis debitis omnis libero animi rem molestias voluptatibus eum cum
        nesciunt consequuntur obcaecati expedita ducimus earum maxime reiciendis
        sint quis, qui aliquam numquam sit! Deleniti voluptas sed tenetur, dicta
        delectus modi necessitatibus nam molestiae unde ratione praesentium
        consequuntur? Culpa cupiditate ipsam doloremque eaque quia ullam veniam
        minima facilis, iusto sunt, sed porro temporibus aliquam, voluptas est
        placeat ipsum eligendi eveniet enim? Qui reiciendis ullam quae molestiae
        delectus iusto autem deserunt eos provident quaerat, eius doloribus
        veniam repellendus necessitatibus minus dignissimos dolore aut possimus
        sint optio quisquam? Magnam necessitatibus exercitationem aspernatur
        minima commodi vel illum placeat. Adipisci ipsa iure, consequuntur
        voluptatem quis corporis incidunt quo id optio ut vel quia, non, a
        aliquid assumenda culpa? Iste rem excepturi dolorem similique ipsum
        natus tempora, vel architecto at nemo aspernatur aut fugit iusto. Fuga
        aspernatur ipsa vel quia nihil minima itaque, tempora soluta est nulla,
        facere porro! Quam sed dignissimos iure ducimus odio, nulla porro
        facilis dolore reiciendis minima debitis facere asperiores magnam,
        temporibus dolor autem error eos libero consequatur. Officiis voluptatem
        omnis ad velit, officia rerum architecto dolor aliquid ex vitae beatae
        obcaecati dignissimos explicabo illum laudantium nemo ut hic ipsam
        voluptatibus cupiditate inventore? At corporis nesciunt hic numquam
        officiis explicabo corrupti? Ipsum cupiditate explicabo distinctio
        minima beatae dignissimos blanditiis itaque dolorum omnis corporis
        quaerat quas est in dolore, minus repellat atque recusandae laboriosam
        ipsam officia sequi sapiente aliquid error animi! A, dicta molestias?
        Dolor odit sint fugiat dicta? Minima minus natus similique, aperiam,
        beatae omnis nostrum odit aliquam culpa inventore libero sed perferendis
        adipisci facere qui necessitatibus tenetur illum ex rem facilis
        provident ducimus nihil quasi excepturi. Doloribus nobis ipsa,
        consectetur fuga sed id rerum. Accusamus, officia quaerat odit
        voluptatem placeat consequatur voluptates voluptatibus numquam beatae
        minus ipsam asperiores? Laboriosam magni reprehenderit in voluptas
        quibusdam ratione, quis deserunt hic illo odio rerum eos inventore.
        Voluptatum, expedita! Possimus maxime inventore libero ex, quae repellat
        illum a eum, mollitia iste reiciendis, numquam temporibus velit debitis
        quidem sit nemo ducimus? Soluta delectus natus saepe?
      </p>
    </section>
  );
};

export default Feed;
