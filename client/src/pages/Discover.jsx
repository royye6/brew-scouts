import React from "react";
import NavBar from "../components/discover/NavBar";
// import SearchBar from "../components/discover/SearchBar";
import Banner from "../components/discover/Banner";
import HeaderArea from "../components/discover/HeaderArea";
import EventsContainer from "../components/discover/EventsContainer";
import SideBar from "../components/discover/SideBar";
import GlobalMap from "../components/discover/GlobalMap";
import { EventsProvider } from "../context/EventsContext";

export const Discover = () => {
    return (
        <div>
            <EventsProvider>
                <NavBar />
                <Banner />
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="col-span-3">
                        <HeaderArea />
                        <div className="grid grid-cols-1 md:grid-cols-10">
                            <div className="hidden md:block col-span-2 bg-white p-5">
                                <SideBar />
                            </div>
                            <div className="col-span-8 ">
                                <EventsContainer />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 mt-16">
                        <div className="hidden overflow-hidden lg:block ">
                            <GlobalMap />
                        </div>
                    </div>
                </div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime nesciunt perspiciatis officia. Ad ratione numquam
                    pariatur beatae! Possimus nemo, veniam, numquam assumenda
                    accusamus, praesentium asperiores quae consectetur nisi sunt
                    aspernatur. Vero saepe eius nihil nostrum soluta obcaecati
                    dolorem tempora consectetur laudantium tempore et cum optio
                    magni totam sunt dolor quae, iure eum, ducimus iste id
                    inventore quos dicta. Sapiente a sit natus nostrum quos
                    necessitatibus, dolorum doloremque doloribus, ex est itaque.
                    Maxime, inventore porro. Consequuntur necessitatibus tenetur
                    ea deserunt dicta aperiam error unde labore odio facere!
                    Impedit eum sequi quae ad dolorum ut, molestiae, ab eaque
                    reprehenderit consequatur minima, maiores sint laudantium!
                    Quis dolores aperiam, reiciendis tenetur debitis enim dicta
                    tempore ullam voluptas aut dignissimos, quam odio excepturi
                    delectus error, qui blanditiis. At laudantium vel vero magni
                    delectus et libero veritatis ratione, non quae maxime, velit
                    error alias animi eos eius magnam fugit officia voluptatibus
                    quaerat, ea incidunt dolorum. Unde eveniet voluptates non
                    ducimus possimus perspiciatis sit voluptate, in magnam
                    adipisci cumque provident vitae expedita magni
                    exercitationem odit! Maxime quidem cum fugiat illo hic,
                    mollitia animi, ad saepe aut delectus sapiente velit eum
                    dolore molestias libero, voluptatum accusamus? Minus, ipsam
                    perferendis! Adipisci deleniti dignissimos doloribus
                    quibusdam tempore nisi culpa commodi quas sapiente
                    assumenda, nostrum recusandae molestiae excepturi odio nulla
                    incidunt debitis. Dicta at commodi, ad quibusdam suscipit
                    accusantium accusamus, maxime sequi quae unde necessitatibus
                    dolorem enim quas id nemo! Accusamus, sint pariatur ea autem
                    illum consectetur ipsam similique rem eaque libero vel
                    assumenda, necessitatibus, nostrum ipsum adipisci
                    accusantium explicabo quasi maxime possimus quas fugit? Eos,
                    vero, eligendi tempore nostrum quaerat quasi aspernatur,
                    magni suscipit nobis numquam atque earum id? Optio at sit
                    molestiae natus accusamus molestias facere magni! Cum ipsa
                    delectus nihil aliquam corporis quaerat, facere reiciendis,
                    corrupti vel perferendis, nemo tempore sapiente
                    necessitatibus iusto nobis quae suscipit? Fugit, facilis,
                    modi voluptate dignissimos aspernatur obcaecati nostrum
                    repudiandae ex optio, delectus dolore. Dolore animi corporis
                    ex. Quibusdam aliquam accusantium ut ab dolorum delectus
                    totam nulla quisquam eaque eius, unde sunt quia velit
                    incidunt sint minima dolore ducimus aspernatur asperiores
                    dignissimos. Aspernatur sapiente omnis maxime quas hic
                    harum. Vitae recusandae corporis iure laudantium similique
                    deserunt odio quae maiores eum accusantium sunt, quis dicta
                    unde ipsa mollitia natus maxime quod voluptate nesciunt sint
                    soluta adipisci eius aspernatur. Rerum consectetur veniam
                    dicta a repellat. Distinctio nam modi culpa maxime quibusdam
                    nihil omnis nobis dolorem necessitatibus corporis obcaecati
                    qui neque sapiente eos optio amet veniam, ad numquam.
                    Reprehenderit optio possimus molestias maxime,
                    exercitationem vero modi alias tempore magnam sunt cum nam
                    quisquam facere voluptates quae voluptatum. Nesciunt amet,
                    iusto, quos qui voluptate neque id adipisci ea fugiat nobis
                    minus exercitationem asperiores excepturi pariatur ipsum
                    consequuntur. Nesciunt numquam nihil a ducimus cum
                    blanditiis ut, dolor, provident laboriosam non molestiae
                    deleniti earum quae. Beatae eveniet ad dignissimos eligendi,
                    necessitatibus doloremque quidem sunt exercitationem
                    excepturi voluptatum vero, accusamus velit dicta nostrum
                    aspernatur! Ad saepe quae rerum, esse cupiditate, hic,
                    eligendi porro quos in laborum tempore eius? Quaerat
                    dignissimos dicta id? Ad quos optio dolorum. Nostrum alias
                    accusamus exercitationem incidunt quis excepturi nihil
                    ducimus. Earum nam rem doloribus possimus at animi omnis cum
                    tempora temporibus, laborum exercitationem id adipisci sit
                    laudantium reprehenderit eaque ipsam, corporis consequuntur!
                    Exercitationem quisquam vitae voluptatibus officia nisi
                    beatae, temporibus nesciunt vero mollitia id, repudiandae
                    quam odio. Et, ipsam natus! Modi itaque consequatur ratione
                    ipsam molestias numquam sapiente enim, incidunt quasi in
                    reiciendis rem dolore cumque nisi repellat quas est
                    doloremque voluptates cupiditate iure dolorum accusamus
                    laudantium recusandae. Rerum ipsa adipisci perferendis cum
                    quod, suscipit quas quibusdam facilis, blanditiis maxime et
                    quo, assumenda molestiae voluptatum! Error in accusantium
                    explicabo dicta eligendi beatae veniam nobis necessitatibus
                    eum consectetur. Impedit rerum repudiandae aliquam
                    consequatur temporibus sequi quidem, neque sapiente
                    dignissimos exercitationem adipisci alias. Architecto
                    commodi velit consequatur reiciendis sed in, temporibus
                    facilis tempore est impedit repellat blanditiis corrupti,
                    voluptatum nemo nisi ratione cum minima eveniet fugiat,
                    magni aperiam. Asperiores, voluptatibus sint dicta maiores
                    molestias odio blanditiis earum velit neque sit, recusandae
                    impedit nihil! Fugiat placeat amet, vel nulla magnam
                    consequuntur. Doloremque eius corrupti nisi delectus iure
                    pariatur natus recusandae nulla vero minus, eveniet fugiat
                    cumque dignissimos veritatis atque magnam dolor accusamus?
                    Accusamus aliquam ut aut doloremque unde tempore. Magni
                    veritatis exercitationem odit molestiae possimus provident
                    dolorum quas voluptatum enim in eius necessitatibus saepe
                    adipisci pariatur consequuntur quasi voluptas sunt,
                    consectetur facilis voluptatibus laudantium itaque quo!
                    Aliquid et doloremque blanditiis, reprehenderit, nemo porro
                    asperiores earum error sapiente, fugiat animi fugit natus
                    sunt vero aut quaerat ex eos pariatur iure illo consectetur
                    corporis. Aperiam deserunt rerum sunt blanditiis commodi
                    perferendis voluptate dicta ab reiciendis, voluptatem
                    expedita totam! Cupiditate sed obcaecati doloribus
                    consequuntur ab distinctio excepturi molestiae deleniti?
                    Doloribus ipsum voluptates aspernatur totam quo corrupti
                    alias ab, quibusdam quas aliquid sint voluptatibus, porro
                    architecto beatae incidunt molestiae possimus et quidem
                    animi, itaque reiciendis unde. Numquam voluptates iure, sit
                    necessitatibus aut, ab, quos exercitationem reprehenderit
                    est aliquid iusto dolorum tempora placeat perferendis odio
                    itaque adipisci expedita possimus ullam consequatur error.
                    Culpa architecto soluta numquam accusamus debitis laborum
                    quas molestias neque error nemo vel libero ducimus
                    cupiditate placeat saepe dignissimos minima voluptatem
                    facere autem, eveniet voluptatum sunt ratione expedita?
                    Autem, nostrum. Veritatis fugit quia consequatur in
                    excepturi blanditiis perspiciatis, ratione ipsum ipsa
                    libero! Qui ducimus dolores eligendi esse consequuntur?
                    Corporis omnis earum sequi laborum excepturi eum maxime
                    ratione explicabo incidunt dolor! Veritatis corrupti beatae
                    temporibus iusto iste saepe iure. Hic nihil expedita
                    perspiciatis deleniti ducimus consectetur ab. Quam nostrum
                    dolore corrupti quia repellat dolorum ducimus. Voluptatibus
                    maxime nobis consectetur asperiores ratione praesentium
                    tenetur tempore, dignissimos sequi ut accusamus aperiam
                    dolorem magni ab blanditiis velit officia, distinctio
                    quisquam, ipsam temporibus repudiandae! Saepe excepturi,
                    blanditiis voluptatum velit reiciendis obcaecati ad,
                    perspiciatis a assumenda dolorum provident praesentium. Ab
                    nihil quis, ipsa tempora officiis similique quibusdam ipsum
                    ipsam natus, sint ex temporibus placeat perferendis
                    corporis, dolor amet facilis eveniet enim. Nostrum nobis
                    ipsa placeat quae tenetur deserunt, repellat qui error
                    fugiat quidem adipisci similique tempora vitae sunt!
                    Repellat alias iure similique, aspernatur earum architecto
                    inventore perferendis recusandae quidem. Minima quae
                    perspiciatis minus sint dolore! Facere, sint.
                </p>
            </EventsProvider>
        </div>
    );
};

export default Discover;
