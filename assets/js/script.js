/* PRODUTOS */
/* Este array guarda todos os produtos exibidos no catálogo. Cada item contém nome, categoria, preço, descrição e imagens. */

const produtos = [
{
    id:'index1',
    nome:"Piercing Transversal de Flecha com Brilho",
    perfuracao:"index",
    preco:160.00,
    cor:"Prata e Dourado",
    descricao:"Piercing transversal em formato de flecha com acabamento prata e detalhes brilhantes. Uma joia moderna e cheia de personalidade para destacar seu estilo.",
    imagem1:"assets/img/transversal1.jpg",
    imagem2:"assets/img/transversal01.jpg",
    promocao:"Titânio"
},
 
{
    id:'index2',
    nome:"Piercing Rook com Brilho",
    perfuracao:"index",
    cor:"Prata e Dourado",
    descricao:"Piercing para perfuração Rook com design elegante e acabamento prata. Ideal para composições delicadas e sofisticadas na orelha.",
    preco:160.00,
    imagem1:"assets/img/rook2.png",
    imagem2:"assets/img/rook02.jpg",
    promocao:"Titânio"
},
 
{
    id:'index3',
    nome:"Piercing Upper Lobe Bolinha sem Brilho",
    perfuracao:"index",
    cor:"Prata e Dourado",
    descricao:"Piercing para Upper Lobe com zircônia acabamento premium. Uma joia delicada que valoriza qualquer composição de orelha.",
    preco:90.00,
    imagem1:"assets/img/upperlobe2.webp",
    imagem2:"assets/img/upperlobe02.png",
    promocao:"Titânio"
},
 
{
    id:'lobulo2',
    nome:"Piercing Lóbulo De bolinha sem brilho",
    perfuracao:"lobulo",
    cor:"Prata e Dourado",
    descricao:"Piercing para lóbulo em formato de Bolinha. Uma joia delicada e romântica para qualquer ocasião.",
    preco:90.00,
    imagem1:"assets/img/lobulo2.png",
    imagem2:"assets/img/lobulo02.png",
    promocao:"Titânio"
},
 
{
    id:'lobulo3',
    nome:"Piercing Lóbulo Redondo com Brilho",
    perfuracao:"lobulo",
    cor:"Prata e Dourado",
    descricao:"Piercing para lóbulo com pedra redonda brilhante e acabamento refinado. Perfeito para quem busca elegância e destaque.",
    preco:120.00,
    imagem1:"assets/img/lobulo3.png",
    imagem2:"assets/img/lobulo03.png",
    promocao:"Titânio"
},
 
{
    id:'lobulo4',
    nome:"Piercing Lóbulo Flor com brilho",
    perfuracao:"lobulo",
    cor:"Prata e Dourado",
    descricao:"Piercing para lóbulo com design minimalista e acabamento sofisticado. Uma joia versátil para o uso diário.",
    preco:120.00,
    imagem1:"assets/img/lobulo4.png",
    imagem2:"assets/img/lobulo04.png",
    promocao:"Titânio"
},
 
{
    id:'upperlobe1',
    nome:"Piercing Upper Lobe Ponto de Luz",
    perfuracao:"upperlobe",
    cor:"Prata e Dourado",
    descricao:"Piercing Upper Lobe com delicada zircônia em formato de ponto de luz. Uma joia clássica e elegante que combina com qualquer composição.",
    preco:90.00,
    imagem1:"assets/img/upperlobe1.webp",
    imagem2:"assets/img/upperlobe01.png",
    promocao:"Titânio"
},
 
{
    id:'upperlobe2',
    nome:"Piercing Upper Lobe Redondo",
    perfuracao:"upperlobe",
    cor:"Prata e Dourado",
    descricao:"Piercing Upper Lobe com design redondo e acabamento liso. Uma joia discreta e sofisticada para o dia a dia.",
    preco:90.00,
    imagem1:"assets/img/upperlobe2.webp",
    imagem2:"assets/img/upperlobe02.png",
    promocao:"Titânio"
},
 
{
    id:'upperlobe3',
    nome:"Piercing Upper Lobe Ponto de Luz",
    perfuracao:"upperlobe",
    cor:"Prata e Dourado",
    descricao:"Piercing Upper Lobe com zircônia brilhante e acabamento refinado. Ideal para quem busca delicadeza e elegância.",
    preco:90.00,
    imagem1:"assets/img/upperlobe3.webp",
    imagem2:"assets/img/upperlobe03.png",
    promocao:"Titânio"
},
 
{
    id:'upperlobe4',
    nome:"Piercing Upper Lobe Argola Lisa",
    perfuracao:"upperlobe",
    cor:"Prata e Dourado",
    descricao:"Piercing Upper Lobe em formato de argola com acabamento liso e visual minimalista. Perfeito para composições modernas e versáteis.",
    preco:90.00,
    imagem1:"assets/img/upperlobe4.png",
    imagem2:"assets/img/upperlobe04.png",
    promocao:"Titânio"
},
{
    id:'daith1',
    nome:"Piercing Daith Triângulo",
    perfuracao:"daith",
    preco:160.00,
    cor:"Prata e Dourado",
    descricao:"Piercing Daith em formato de triângulo com acabamento premium e design moderno. Uma joia elegante que destaca a perfuração com muito estilo.",
    imagem1:"assets/img/daith1.jpg",
    imagem2:"assets/img/daith01.png",
    promocao:"Titânio"
},
 
{
    id:'daith2',
    nome:"Piercing Daith Coração",
    perfuracao:"daith",
    cor:"Prata e Dourado",
    descricao:"Piercing Daith em formato de coração com detalhes delicados e brilho sofisticado. Ideal para quem busca um visual romântico e moderno.",
    preco:160.00,
    imagem1:"assets/img/daith2.jpg",
    imagem2:"assets/img/daith02.jpg",
    promocao:"Titânio"
},
 
{
    id:'daith3',
    nome:"Piercing Daith Redondo com Brilho",
    perfuracao:"daith",
    cor:"Prata e Dourado",
    descricao:"Piercing Daith com design redondo e zircônia brilhante. Uma joia clássica e versátil que combina com qualquer composição.",
    preco:160.00,
    imagem1:"assets/img/daith3.jpg",
    imagem2:"assets/img/daith03.png",
    promocao:"Titânio"
},
 
{
    id:'daith4',
    nome:"Piercing Daith Redondo sem Brilho",
    perfuracao:"daith",
    cor:"Prata e Dourado",
    descricao:"Piercing Daith com design redondo e acabamento liso. Uma joia discreta, elegante e perfeita para o uso diário.",
    preco:90.00,
    imagem1:"assets/img/daith4.jpg",
    imagem2:"assets/img/daith04.png",
    promocao:"Titânio"
},
 
{
    id:'daith5',
    nome:"Piercing Daith Redondo sem Brilho",
    perfuracao:"daith",
    cor:"Prata e Dourado",
    descricao:"Piercing Daith com acabamento minimalista e visual sofisticado. Ideal para quem prefere uma joia discreta sem perder a elegância.",
    preco:90.00,
    imagem1:"assets/img/daith5.jpg",
    imagem2:"assets/img/daith05.png",
    promocao:"Titânio"
},
 
{
    id: 'forwardhelix1',
    nome:"Piercing Forward Helix de Bolinha com Brilho",
    perfuracao:"forwardhelix",
    cor:"Prata e Dourado",
    descricao:"Piercing Forward Helix com delicada pedra brilhante em tom cristal. Uma joia clássica e versátil que adiciona elegância e sofisticação ao visual.",
    preco:140.00,
    imagem1:"assets/img/forwardhelix1.png",
    imagem2:"assets/img/forwardhelix01.jpg",
    promocao:"Titânio"
},
 
{
    id: 'forwardhelix2',
    nome:"Piercing Forward Helix de Bolinha com Brilho",
    perfuracao:"forwardhelix",
    cor:"Prata e Dourado",
    descricao:"Piercing Forward Helix com acabamento refinado e pedra brilhante. Uma joia delicada e moderna, perfeita para composições minimalistas.",
    preco:140.00,
    imagem1:"assets/img/forwardhelix2.jpg",
    imagem2:"assets/img/forwardhelix02.png",
    promocao:"Titânio"
},
 
{
    id: 'forwardhelix3',
    nome:"Piercing Forward Helix de Raio com Brilho",
    perfuracao:"forwardhelix",
    cor:"Prata e Dourado",
    descricao:"Piercing Forward Helix em formato de raio com acabamento prata e detalhes brilhantes. Uma joia moderna e cheia de personalidade.",
    preco:140.00,
    imagem1:"assets/img/forwardhelix3.png",
    imagem2:"assets/img/forwardhelix03.png",
    promocao:"Titânio"
},
 
{
    id: 'forwardhelix4',
    nome:"Piercing Forward Helix de Coração com Brilho",
    perfuracao:"forwardhelix",
    cor:"Dourado e Prata",
    descricao:"Piercing Forward Helix em formato de coração com acabamento dourado e brilho delicado. Uma joia romântica e elegante para destacar seu estilo.",
    preco:140.00,
    imagem1:"assets/img/forwardhelix4.png",
    imagem2:"assets/img/forwardhelix04.png",
    promocao:"Titânio"
},
 
{
    id: 'forwardhelix5',
    nome:"Piercing Forward Helix de Cobra com Brilho",
    perfuracao:"forwardhelix",
    cor:"Prata e Dourado",
    descricao:"Piercing Forward Helix em formato de cobra com acabamento prata e pedras brilhantes. Uma joia sofisticada e exclusiva que transmite atitude e personalidade.",
    preco:140.00,
    imagem1:"assets/img/forwardhelix5.png",
    imagem2:"assets/img/forwardhelix05.png",
    promocao:"Titânio"
},
 
{
    id:'snug1',
    nome:"Piercing Snug Argola Cravejada com Brilho",
    perfuracao:"snug",
    cor:"Prata e Dourado",
    descricao:"Piercing Snug em formato de argola cravejada com zircônias brilhantes. Uma joia sofisticada e elegante, perfeita para destacar sua composição de orelha.",
    preco:180.00,
    imagem1:"assets/img/snug1.png",
    imagem2:"assets/img/snug01.jpg",
    promocao:"Titânio"
},
 
{
    id:'snug2',
    nome:"Piercing Snug de Bolinha Lisa",
    perfuracao:"snug",
    cor:"Prata e Dourado",
    descricao:"Piercing Snug com bolinha lisa e acabamento polido. Uma joia discreta, moderna e versátil para quem busca um visual minimalista.",
    preco:80.00,
    imagem1:"assets/img/snug2.png",
    imagem2:"assets/img/snug02.jpg",
    promocao:"Titânio"
},
 
 
 
{
    id:'flat1',
    nome:"Piercing Flat Três Pétalas com Brilho",
    perfuracao:"flat",
    cor:"Prata e Dourado",
    descricao:"Piercing Flat em formato de três pétalas com detalhes brilhantes. Uma joia delicada e elegante, perfeita para composições modernas e sofisticadas.",
    preco:140.00,
    imagem1:"assets/img/flat01.png",
    imagem2:"assets/img/flat1.jpg",
    promocao:"Titânio"
},
 
{
    id:'flat2',
    nome:"Piercing Flat de Flor com Brilho",
    perfuracao:"flat",
    cor:"Prata e Dourado",
    descricao:"Piercing Flat em formato de flor com zircônias brilhantes. Uma joia delicada e charmosa que adiciona leveza e sofisticação ao visual.",
    preco:140.00,
    imagem1:"assets/img/flat2.png",
    imagem2:"assets/img/flat02.png",
    promocao:"Titânio"
},
 
{
    id:'flat3',
    nome:"Piercing Flat Arco Cravejado com Brilho",
    perfuracao:"flat",
    cor:"Prata e Dourado",
    descricao:"Piercing Flat em formato de arco cravejado com zircônias brilhantes. Uma joia moderna e sofisticada para destacar sua composição de orelha.",
    preco:180.00,
    imagem1:"assets/img/flat3.png",
    imagem2:"assets/img/flat03.png",
    promocao:"Titânio"
},
 
{
    id:'surface1',
    nome:"Piercing Surface de Bolinha Lisa",
    perfuracao:"surface",
    cor:"Prata e Dourado",
    descricao:"Piercing Surface com bolinha lisa e acabamento polido. Uma joia discreta, moderna e versátil, ideal para quem busca um visual minimalista.",
    preco:180.00,
    imagem1:"assets/img/surfacetragus1.jpg",
    imagem2:"assets/img/surfacetragus01.png",
    promocao:"Titânio"
},
 
{
    id:'surface2',
    nome:"Piercing Surface Coração com Brilho",
    perfuracao:"surface",
    cor:"Prata e Dourado",
    descricao:"Piercing Surface em formato de coração com detalhes brilhantes. Uma joia delicada e elegante que adiciona charme e personalidade ao visual.",
    preco:180.00,
    imagem1:"assets/img/surfacetragus2.png",
    imagem2:"assets/img/surfacetragus02.png",
    promocao:"Titânio"
},
 
{
    id:'surface3',
    nome:"Piercing Surface com Ponto de Luz",
    perfuracao:"surface",
    cor:"Prata e Dourado",
    descricao:"Piercing Surface com zircônia em formato de ponto de luz. Uma joia clássica e sofisticada que oferece brilho na medida certa.",
    preco:180.00,
    imagem1:"assets/img/surface4.png",
    imagem2:"assets/img/surface3.jpg",
    promocao:"Titânio"
},
 
{
    id:'surface4',
    nome:"Piercing Surface com Ponto de Luz",
    perfuracao:"surface",
    cor:"Prata e Dourado",
    descricao:"Piercing Surface com delicada zircônia brilhante e acabamento premium. Uma joia elegante e versátil para compor diferentes estilos.",
    preco:180.00,
    imagem1:"assets/img/surface4.png",
    imagem2:"assets/img/surface04.jpg",
    promocao:"Titânio"
},
 
{
    id:'rook1',
    nome:"Piercing Rook de Estrela com Brilho",
    perfuracao:"rook",
    cor:"Prata e Dourado",
    descricao:"Piercing Rook em formato de estrela com zircônias brilhantes. Uma joia delicada e moderna que adiciona charme e elegância à composição.",
    preco:160.00,
    imagem1:"assets/img/rook1.png",
    imagem2:"assets/img/rook01.png",
    promocao:"Titânio"
},
 
{
    id:'rook2',
    nome:"Piercing Rook de Pétalas com Brilho",
    perfuracao:"rook",
    cor:"Prata e Dourado",
    descricao:"Piercing Rook inspirado em pétalas delicadas com acabamento dourado e brilho sofisticado. Ideal para quem busca um visual elegante e feminino.",
    preco:160.00,
    imagem1:"assets/img/rook2.png",
    imagem2:"assets/img/rook02.jpg",
    promocao:"Titânio"
},
 
{
    id:'rook3',
    nome:"Piercing Rook de Coração com Brilho",
    perfuracao:"rook",
    cor:"Prata e Dourado",
    descricao:"Piercing Rook em formato de coração com detalhes brilhantes. Uma joia romântica e delicada, perfeita para destacar sua perfuração.",
    preco:160.00,
    imagem1:"assets/img/rook3.jpg",
    imagem2:"assets/img/rook03.jpg",
    promocao:"Titânio"
},
 
{
    id:'rook4',
    nome:"Piercing Rook de Borboleta Azul com Brilho",
    perfuracao:"rook",
    cor:"Prata e Dourado",
    descricao:"Piercing Rook em formato de borboleta azul com detalhes brilhantes. Uma joia encantadora que transmite leveza, beleza e personalidade.",
    preco:160.00,
    imagem1:"assets/img/rook4.png",
    imagem2:"assets/img/rook04.png",
    promocao:"Titânio"
},
 
{
    id:'rook5',
    nome:"Piercing Rook Ponto Cravejado com Brilho",
    perfuracao:"rook",
    cor:"Prata e Dourado",
    descricao:"Piercing Rook com zircônias cravejadas e brilho intenso. Uma joia clássica e sofisticada, perfeita para composições elegantes.",
    preco:160.00,
    imagem1:"assets/img/rook5.png",
    imagem2:"assets/img/rook05.png",
    promocao:"Titânio"
},
 
{
    id: 'transversal1',
    nome:"Piercing Transversal de Flecha com Brilho",
    perfuracao:"transversal",
    cor:"Prata e Dourado",
    descricao:"Piercing Transversal em formato de flecha com detalhes brilhantes e acabamento refinado. Uma joia moderna e estilosa para destacar sua perfuração.",
    preco:160.00,
    imagem1:"assets/img/transversal1.jpg",
    imagem2:"assets/img/transversal01.jpg",
    promocao:"Titânio"
},
 
{
    id: 'transversal2',
    nome:"Piercing Transversal Barbell Reta com Pontas Cônicas",
    perfuracao:"transversal",
    cor:"Prata e Dourado",
    descricao:"Piercing Transversal modelo barbell reta com pontas cônicas. Uma joia clássica e versátil, ideal para quem busca um visual moderno e marcante.",
    preco:90.00,
    imagem1:"assets/img/transversal2.jpg",
    imagem2:"assets/img/transversal02.jpg",
    promocao:"Titânio"
},
 
{
    id: 'transversal3',
    nome:"Piercing Transversal Industrial Barbell Lisa",
    perfuracao:"transversal",
    cor:"Prata e Dourado",
    descricao:"Piercing Transversal estilo industrial barbell com acabamento liso e polido. Uma joia discreta, resistente e perfeita para o uso diário.",
    preco:90.00,
    imagem1:"assets/img/transversal3.jpg",
    imagem2:"assets/img/transversal03.jpg",
    promocao:"Titânio"
},
 
{
    id: 'transversal4',
    nome:"Piercing Transversal Industrial Barbell Cruz com Brilho",
    perfuracao:"transversal",
    cor:"Prata e Dourado",
    descricao:"Piercing Transversal estilo industrial com detalhe de cruz cravejada e acabamento brilhante. Uma joia moderna que combina elegância e personalidade.",
    preco:180,
    imagem1:"assets/img/transversal4.jpg",
    imagem2:"assets/img/transversal04.jpg",
    promocao:"Titânio"
},
 
{
    id:'lingua1',
    nome:"Piercing Língua Ponta com Brilho",
    perfuracao:"lingua",
    cor:"Prata e Dourado",
    descricao:"Piercing para língua com ponta brilhante e acabamento sofisticado. Uma joia moderna que proporciona destaque e elegância à perfuração.",
    preco:90.00,
    imagem1:"assets/img/lingua1.png",
    imagem2:"assets/img/lingua01.png",
    promocao:"Titânio"
},
 
{
    id:'lingua2',
    nome:"Piercing Língua Redondo Colorido",
    perfuracao:"lingua",
    cor:"Prata e Dourado",
    descricao:"Piercing para língua com esfera colorida e acabamento polido. Uma joia divertida e estilosa para quem deseja adicionar mais personalidade ao visual.",
    preco:90.00,
    imagem1:"assets/img/lingua2.jpg",
    imagem2:"assets/img/lingua02.png",
    promocao:"Titânio"
},
 
{
    id: 'microdermal1',
    nome:"Piercing Microdermal Cravejado com Brilho",
    perfuracao:"microdermal",
    cor:"Prata e Dourado",
    descricao:"Piercing Microdermal cravejado com zircônias brilhantes e acabamento premium. Uma joia sofisticada e elegante, ideal para quem busca destaque e brilho na medida certa.",
    preco:220.00,
    imagem1:"assets/img/microdemal1.png",
    imagem2:"assets/img/microdermal01.jpg",
    promocao:"Titânio"
},
 
{
    id:'sobrancelha1',
    nome:"Piercing Sobrancelha Bolinha",
    perfuracao:"sobrancelha",
    cor:"Prata e Dourado",
    descricao:"Piercing para sobrancelha com bolinhas lisas e acabamento polido. Uma joia clássica, discreta e versátil para o uso diário.",
    preco:180.00,
    imagem1:"assets/img/sobrancelha01.jpg",
    imagem2:"assets/img/sobrancelha1.jpg",
    promocao:"Titânio"
},
 
{
    id:'sobrancelha2',
    nome:"Piercing Sobrancelha Barbell com Pontas Cônicas",
    perfuracao:"sobrancelha",
    cor:"Prata e Dourado",
    descricao:"Piercing para sobrancelha modelo barbell curvo com pontas cônicas. Uma joia moderna e marcante, perfeita para quem busca um visual estiloso e cheio de personalidade.",
    preco:90.00,
    imagem1:"assets/img/sobrancelha2.png",
    imagem2:"assets/img/sombrancelha01.png",
    promocao:"Titânio"
},
 
{
    id:'mamilo1',
    nome:"Piercing Mamilo Floral de Zircônias em Formato de Pétalas",
    perfuracao:"mamilo",
    cor:"Prata e Dourado",
    descricao:"Piercing para mamilo com delicadas zircônias em formato floral. Uma joia elegante e sofisticada que proporciona brilho e destaque à perfuração.",
    preco:180.00,
    imagem1:"assets/img/mamilo1.jpg",
    imagem2:"assets/img/mamilo01.jpg",
    promocao:"Titânio"
},
 
{
    id:'mamilo2',
    nome:"Piercing Mamilo Barbell Reta",
    perfuracao:"mamilo",
    cor:"Prata e Dourado",
    descricao:"Piercing para mamilo modelo barbell reta com acabamento polido. Uma joia clássica, versátil e confortável para o uso diário.",
    preco:180.00,
    imagem1:"assets/img/mamilo2.png",
    imagem2:"assets/img/mamilo2.png",
    promocao:"Titânio"
},
 
{
    id:'mamilo3',
    nome:"Piercing Mamilo Barbell Reta com Zircônias e Ponta de Bolinha",
    perfuracao:"mamilo",
    cor:"Prata e Dourado",
    descricao:"Piercing para mamilo modelo barbell reta com zircônias brilhantes e extremidades em formato de bolinha. Uma joia moderna que combina elegância e brilho.",
    preco:180.00,
    imagem1:"assets/img/mamilo3.png",
    imagem2:"assets/img/mamilo3.png",
    promocao:"Titânio"
},
 
{
    id:'mamilo4',
    nome:"Piercing Mamilo Halo de Zircônias Cravejado",
    perfuracao:"mamilo",
    cor:"Prata e Dourado",
    descricao:"Piercing para mamilo com design halo totalmente cravejado de zircônias. Uma joia luxuosa e sofisticada para quem busca máximo brilho e destaque.",
    preco:180.00,
    imagem1:"assets/img/mamilo4.jpg",
    imagem2:"assets/img/mamilo4.jpg",
    promocao:"Titânio"
},
 
{
    id:'mamilo5',
    nome:"Piercing Mamilo Halo de Zircônias Coração Cravejado",
    perfuracao:"mamilo",
    cor:"Prata e Dourado",
    descricao:"Piercing para mamilo com design em formato de coração cravejado de zircônias brilhantes. Uma joia romântica, delicada e cheia de personalidade.",
    preco:180.00,
    imagem1:"assets/img/mamilo5.jpg",
    imagem2:"assets/img/mamilo5.jpg",
    promocao:"Titânio"
},
 
{
    id:'intimofeminino1',
    nome:"Piercing Íntimo Feminino Flor de Zircônias",
    perfuracao:"intimofeminino",
    cor:"Prata e Dourado",
    descricao:"Piercing íntimo feminino com delicadas zircônias em formato de flor. Uma joia elegante e sofisticada que proporciona brilho e feminilidade.",
    preco:220.00,
    imagem1:"assets/img/intimofeminino1.png",
    imagem2:"assets/img/intimofeminino1.png",
    promocao:"Titânio"
},
 
{
    id:'intimofeminino2',
    nome:"Piercing Íntimo Feminino Curvo com Zircônias",
    perfuracao:"intimofeminino",
    cor:"Prata e Dourado",
    descricao:"Piercing íntimo feminino modelo curvo com zircônias brilhantes. Uma joia clássica e confortável que combina elegância e delicadeza.",
    preco:180.00,
    imagem1:"assets/img/intimofeminino2.png",
    imagem2:"assets/img/intimofeminino2.png",
    promocao:"Titânio"
},
 
{
    id:'intimofeminino3',
    nome:"Piercing Íntimo Feminino Flor Pendente de Zircônias",
    perfuracao:"intimofeminino",
    cor:"Prata e Dourado",
    descricao:"Piercing íntimo feminino com detalhe floral pendente e zircônias brilhantes. Uma joia sofisticada que oferece movimento, brilho e charme.",
    preco:220.00,
    imagem1:"assets/img/intimofeminino3.png",
    imagem2:"assets/img/intimofeminino3.png",
    promocao:"Titânio"
},
 
{
    id:'intimofeminino4',
    nome:"Piercing Íntimo Feminino Borboleta Cravejada",
    perfuracao:"intimofeminino",
    cor:"Prata e Dourado",
    descricao:"Piercing íntimo feminino em formato de borboleta cravejada com zircônias. Uma joia delicada, elegante e cheia de personalidade.",
    preco:220.00,
    imagem1:"assets/img/intimofeminino4.jpg",
    imagem2:"assets/img/intimofeminino4.jpg",
    promocao:"Titânio"
},
{
    id:'abanasal1',
    nome:"Piercing Aba Nasal Triângulo",
    perfuracao:"abanasal",
    preco:90.00,
    cor:"Prata e Dourado",
    descricao:"Design moderno em formato de triângulo com acabamento premium nas cores prata e dourado.",
    imagem1:"assets/img/abanasal1.jpg",
    imagem2:"assets/img/abanasal01.jpg",
    promocao:"Titânio"
},
 
{
    id:'abanasal2',
    nome:"Piercing Aba Nasal Coração",
    perfuracao:"abanasal",
    cor:"Prata e Dourado",
    descricao:"Design em formato de coração com zircônias cravejadas.",
    preco:90.00,
    imagem1:"assets/img/abanasal2.jpg",
    imagem2:"assets/img/abanasal02.jpg",
    promocao:"Titânio"
},
 
{
    id:'abanasal3',
    nome:"Piercing Aba Nasal Redondo com Brilho",
    perfuracao:"abanasal",
    cor:"Prata e Dourado",
    descricao:"Piercing em formato circular com brilho intenso.",
    preco:90.00,
    imagem1:"assets/img/abanasal3.jpg",
    imagem2:"assets/img/abanasal03.jpg",
    promocao:"Titânio"
},
 
 
{
    id: 'septo1',
    nome:"Piercing Septo Ferradura com Bolinhas e Zircônias",
    perfuracao:"septo",
    cor:"Prata e Dourado",
    descricao:"Piercing Septo modelo ferradura com bolinhas e zircônias brilhantes. Uma joia clássica e elegante que combina conforto, brilho e versatilidade.",
    preco:90.00,
    imagem1:"assets/img/septo1.png",
    imagem2:"assets/img/septo01.jpg",
    promocao:"Titânio"
},
 
{
    id: 'septo2',
    nome:"Piercing Septo Raio Cravejado de Zircônias",
    perfuracao:"septo",
    cor:"Prata e Dourado",
    descricao:"Piercing Septo em formato de raio cravejado com zircônias brilhantes. Uma joia moderna e cheia de personalidade para destacar seu estilo.",
    preco:102.00,
    imagem1:"assets/img/septo2.png",
    imagem2:"assets/img/septo02.jpg",
    promocao:"Titânio"
},
 
{
    id: 'septo3',
    nome:"Piercing Septo Argola Lisa",
    perfuracao:"septo",
    cor:"Prata e Dourado",
    descricao:"Piercing Septo em formato de argola lisa com acabamento polido. Uma joia minimalista, versátil e perfeita para o uso diário.",
    preco:90.00,
    imagem1:"assets/img/septo3.png",
    imagem2:"assets/img/septo03.jpg",
    promocao:"Titânio"
},
 
{
    id: 'septo4',
    nome:"Piercing Septo Argola Cobra Cravejada",
    perfuracao:"septo",
    cor:"Prata e Dourado",
    descricao:"Piercing Septo em formato de cobra cravejada com zircônias brilhantes. Uma joia sofisticada e marcante que transmite atitude e exclusividade.",
    preco:90.00,
    imagem1:"assets/img/septo4.png",
    imagem2:"assets/img/septo04.jpg",
    promocao:"Titânio"
},
 
{
    id: 'bridge1',
    nome:"Piercing Bridge de Bolinha sem Brilho",
    perfuracao:"bridge",
    cor:"Prata e Dourado",
    descricao:"Piercing Bridge com bolinhas lisas e acabamento polido. Uma joia clássica, discreta e versátil, perfeita para quem busca um visual minimalista.",
    preco:90.00,
    imagem1:"assets/img/bridge1.png",
    imagem2:"assets/img/bridge01.png",
    promocao:"Titânio"
},
 
{
    id: 'bridge2',
    nome:"Piercing Bridge Spike",
    perfuracao:"bridge",
    cor:"Prata e Dourado",
    descricao:"Piercing Bridge com extremidades em formato spike e acabamento metálico. Uma joia moderna e marcante, ideal para quem busca um estilo ousado e cheio de personalidade.",
    preco:380,
    imagem1:"assets/img/sobrancelha2.png",
    imagem2:"assets/img/bridge2.jpg",
    promocao:"Titânio"
},
 
{
    id:'umbigo1',
    nome:"Piercing Umbigo Borboleta Pendente Cravejada",
    perfuracao:"umbigo",
    preco:220.00,
    cor:"Prata e Dourado",
    descricao:"Piercing para umbigo com borboleta pendente cravejada de zircônias brilhantes. Uma joia delicada e sofisticada que proporciona movimento e elegância.",
    imagem1:"assets/img/umbigo1.png",
    imagem2:"assets/img/umbigo01.png",
    promocao:"Titânio"
},
 
{
    id:'umbigo2',
    nome:"Piercing Umbigo Trio de Corações Cravejados",
    perfuracao:"umbigo",
    cor:"Prata e Dourado",
    descricao:"Piercing para umbigo com trio de corações cravejados de zircônias. Uma joia romântica e charmosa, perfeita para destacar sua perfuração.",
    preco:220.00,
    imagem1:"assets/img/umbigo2.png",
    imagem2:"assets/img/umbigo02.png",
    promocao:"Titânio"
},
 
{
    id:'umbigo3',
    nome:"Piercing Umbigo Borboleta com Zircônia",
    perfuracao:"umbigo",
    cor:"Prata e Dourado",
    descricao:"Piercing para umbigo em formato de borboleta com zircônias brilhantes. Uma joia elegante e feminina que combina delicadeza e brilho.",
    preco:220.00,
    imagem1:"assets/img/umbigo3.png",
    imagem2:"assets/img/umbigo03.png",
    promocao:"Titânio"
},
 
{
    id:'umbigo4',
    nome:"Piercing Umbigo Solitário de Zircônia",
    perfuracao:"umbigo",
    cor:"Prata e Dourado",
    descricao:"Piercing para umbigo com zircônia solitária de brilho intenso. Uma joia clássica, versátil e sofisticada para qualquer ocasião.",
    preco:220.00,
    imagem1:"assets/img/umbigo5.jpg",
    imagem2:"assets/img/umbigo05.jpg",
    promocao:"Titânio"
},
 
{
    id:'helix1',
    nome:"Piercing Hélix Argola com Brilho",
    perfuracao:"helix",
    cor:"Prata e Dourado",
    descricao:"Piercing Hélix em formato de argola com detalhes brilhantes. Uma joia clássica e elegante que adiciona sofisticação a qualquer composição.",
    preco:180.00,
    imagem1:"assets/img/helix1.webp",
    imagem2:"assets/img/helix01.jpg",
    promocao:"Titânio"
},
 
{
    id:'helix2',
    nome:"Piercing Hélix Flor de Cristais",
    perfuracao:"helix",
    cor:"Prata e Dourado",
    descricao:"Piercing Hélix em formato de flor com cristais brilhantes. Uma joia delicada e charmosa, perfeita para um visual feminino e sofisticado.",
    preco:140.00,
    imagem1:"assets/img/helix2.webp",
    imagem2:"assets/img/helix02.png",
    promocao:"Titânio"
},
 
{
    id:'helix3',
    nome:"Piercing Hélix Curva de Zircônias",
    perfuracao:"helix",
    cor:"Prata e Dourado",
    descricao:"Piercing Hélix com design curvo adornado por zircônias brilhantes. Uma joia moderna e elegante que valoriza a perfuração com muito brilho.",
    preco:180.00,
    imagem1:"assets/img/helix3.webp",
    imagem2:"assets/img/helix03.png",
    promocao:"Titânio"
},
 
{
    id:'helix4',
    nome:"Piercing Hélix Jardim de Zircônias",
    perfuracao:"helix",
    cor:"Prata e Dourado",
    descricao:"Piercing Hélix inspirado em elementos florais e composto por zircônias brilhantes. Uma joia sofisticada que transmite delicadeza e exclusividade.",
    preco:220.00,
    imagem1:"assets/img/helix4.webp",
    imagem2:"assets/img/helix04.jpg",
    promocao:"Titânio"
},
 
{
    id:'tragus1',
    nome:"Piercing Tragus Coração com Brilho",
    perfuracao:"tragus",
    cor:"Prata e Dourado",
    descricao:"Piercing Tragus em formato de coração com zircônias brilhantes. Uma joia delicada e elegante, perfeita para composições românticas e sofisticadas.",
    preco:140.00,
    imagem1:"assets/img/lobulo1.png",
    imagem2:"assets/img/tragus01.webp",
    promocao:"Titânio"
},
 
{
    id:'tragus3',
    nome:"Piercing Tragus Bolinha Clássica",
    perfuracao:"tragus",
    cor:"Prata e Dourado",
    descricao:"Piercing Tragus com bolinha lisa e acabamento polido. Uma joia clássica, discreta e versátil para o uso diário.",
    preco:90.00,
    imagem1:"assets/img/lobulo2.png",
    imagem2:"assets/img/tragus03.jpg",
    promocao:"Titânio"
},
 
{
    id:'tragus4',
    nome:"Piercing Tragus Raio Cravejado de Zircônias",
    perfuracao:"tragus",
    cor:"Prata e Dourado",
    descricao:"Piercing Tragus em formato de raio cravejado com zircônias brilhantes. Uma joia moderna e cheia de personalidade para destacar seu estilo.",
    preco:140.00,
    imagem1:"assets/img/forwardhelix3.png",
    imagem2:"assets/img/tragus04.jpg",
    promocao:"Titânio"
},
 
 
 
{
    id:'medusa1',
    nome:"Labret Estrela Facetada",
    perfuracao:"medusa",
    cor:"Prata e Dourado",
    descricao:"Joia para perfuração Medusa em aço cirúrgico, modelo estrela facetada com acabamento brilhante. Delicada, confortável e ideal para uso diário.",
    preco:370,
    imagem1:"assets/img/medusa1.png",
    imagem2:"assets/img/medusa01.png",
    promocao:"Titânio"
},
{
    id:'medusa2',
    nome:"Labret Mandala Cravejada",
    perfuracao:"medusa",
    cor:"Prata e Dourado",
    descricao:"Joia para perfuração Medusa em aço cirúrgico, modelo mandala cravejada com zircônias brilhantes. Elegante e perfeita para destacar a perfuração.",
    preco:160.00,
    imagem1:"assets/img/medusa2.png",
    imagem2:"assets/img/medusa02.png",
    promocao:"Titânio"
},
{
    id:'medusa3',
    nome:"Labret Ponto de Luz (Zircônia Solitária)",
    perfuracao:"medusa",
    cor:"Prata e Dourado",
    descricao:"Joia para perfuração Medusa em aço cirúrgico, modelo ponto de luz com zircônia solitária. Clássica, discreta e sofisticada.",
    preco:180.00,
    imagem1:"assets/img/medusa3.png",
    imagem2:"assets/img/medusa03.png",
    promocao:"Titânio"
},
{
    id:'monroe1',
    nome:"Labret Ponto de Luz (Zircônia Solitária)",
    perfuracao:"monroe",
    cor:"Prata e Dourado",
    descricao:"Joia para perfuração Monroe em aço cirúrgico, modelo ponto de luz com zircônia solitária. Delicada, elegante e perfeita para quem busca um visual discreto e sofisticado.",
    preco:120.00,
    imagem1:"assets/img/monroe01.png",
    imagem2:"assets/img/monroe1.png",
    promocao:"Titânio"
},
{
    id:'monroe2',
    nome:"Labret Bola Lisa Dourada",
    perfuracao:"monroe",
    cor:"Dourado e Prata",
    descricao:"Joia para perfuração Monroe em aço cirúrgico, modelo bola lisa dourada. Clássica, confortável e ideal para compor qualquer estilo com elegância.",
    preco:90.00,
    imagem1:"assets/img/monroe2.png",
    imagem2:"assets/img/monroe02.png",
    promocao:"Titânio"
},
 
 
{
    id:'conch1',
    nome:"Piercing Conch Argola Cravejada",
    perfuracao:"conch",
    cor:"Prata e Dourado",
    descricao:"Piercing Conch em formato de argola cravejada com zircônias brilhantes. Joia elegante e delicada, ideal para destacar a perfuração com muito brilho e sofisticação.",
    preco:370,
    imagem1:"assets/img/conch01.png",
    imagem2:"assets/img/conch1.png",
    promocao:"Titânio"
},
{
    id:'conch2',
    nome:"Piercing Conch Argola Lisa",
    perfuracao:"conch",
    cor:"Prata e Dourado",
    descricao:"Piercing Conch em formato de argola lisa sem pedras ou brilhos. Modelo minimalista, confortável e perfeito para o uso diário.",
    preco:370,
    imagem1:"assets/img/conch02.png",
    imagem2:"assets/img/conch2.png",
    promocao:"Titânio"
},
{
    id:'conch3',
    nome:"Piercing Conch Bolinha Comum",
    perfuracao:"conch",
    cor:"Dourado e Prata",
    descricao:"Piercing Conch com topo de bolinha lisa na cor dourada. Modelo clássico e discreto, ideal para quem busca um visual simples e elegante.",
    preco:90.00,
    imagem1:"assets/img/conch03.png",
    imagem2:"assets/img/conch03.png",
    promocao:"Titânio"
},
{
    id:'venom1',
    nome:"Piercing Venom Peça única com Brilho",
    perfuracao:"venom",
    cor:"Prata e Dourado",
    descricao:"Piercing para perfuração Venom Oeça unica  em diferentes tamanhos. Joia sofisticada e moderna, ideal para destacar a língua com muito brilho e elegância.",
    preco:370,
    imagem1:"assets/img/venom01.png",
    imagem2:"assets/img/venom1.png",
    promocao:"Titânio"
},
 
];


/* Esta função filtra os produtos de acordo com a página aberta, como index, lobulo, daith e outras categorias. */
function filtrarPorPerfuracao(perfuracao){
 
    const filtrados = produtos.filter(produto =>
        produto.perfuracao === perfuracao
    );
 
    renderizar(filtrados);
}
 
 
/* ELEMENTOS */
/* Aqui são capturados os elementos da página que controlam a busca, a ordenação, o contador e o modal do carrinho. */
// Seleciona o campo de pesquisa do catálogo.
const pesquisa = document.getElementById("pesquisa");
// Seleciona o campo de ordenação de preço.
const ordenar = document.getElementById("ordenar");
// Seleciona o elemento que mostra quantos itens existem no carrinho.
const contador = document.getElementById("contador");
// Seleciona a área onde os itens do carrinho serão renderizados.
const itensCarrinho = document.getElementById("itensCarrinho");
// Seleciona o elemento que mostra o valor total do carrinho.
const total = document.getElementById("total");
// Seleciona o painel modal que exibe o carrinho.
const modal = document.getElementById("modal");
// Seleciona a seção onde os cards dos produtos são exibidos.
const catalogo = document.getElementById("catalogo");
 
/* CARRINHO */
/* Estas funções carregam e salvam os itens do carrinho no localStorage para manter os produtos mesmo após trocar de página. */
// Cria uma mensagem visual de confirmação para quando o produto for adicionado ao carrinho.
function mostrarMensagemCarrinho(nomeProduto){

    let mensagem = document.getElementById("mensagemCarrinho");

    if(!mensagem){
        mensagem = document.createElement("div");
        mensagem.id = "mensagemCarrinho";
        document.body.appendChild(mensagem);
    }

    mensagem.textContent = `✅ ${nomeProduto} adicionado ao carrinho`;
    mensagem.classList.add("mostrar");

    clearTimeout(mensagem.timer);
    mensagem.timer = setTimeout(() => {
        mensagem.classList.remove("mostrar");
    }, 2200);
}

// Carrega os itens do carrinho guardados no navegador.
function carregarCarrinho(){

    try{
        // Pega os dados salvos com o nome carrinho.
        const dados = localStorage.getItem("carrinho");

        // Se não houver dados, retorna um array vazio.
        if(!dados) return [];

        // Converte os dados salvos em um objeto JavaScript.
        const itens = JSON.parse(dados);

        // Se os dados vierem em formato inválido, evita erro.
        if(!Array.isArray(itens)) return [];

        // Garante que cada item tenha quantidade e imagem válidas.
        return itens.map(item => ({
            ...item,
            quantidade: item.quantidade || 1,
            imagem1: item.imagem1 || item.imagem || "assets/img/placeholder.png"
        }));

    } catch(erro){
        // Mostra erro no console caso a leitura falhe.
        console.error("Erro ao carregar carrinho:", erro);
        return [];
    }
}

// Salva o carrinho atual no armazenamento do navegador.
function salvarCarrinho(){

    try{
        // Converte o carrinho para texto e salva no localStorage.
        localStorage.setItem("carrinho", JSON.stringify(window.carrinho));
        // Mantém a referência global atualizada.
        window.carrinho = window.carrinho;

    } catch(erro){
        // Mostra erro caso o salvamento falhe.
        console.error("Erro ao salvar carrinho:", erro);
    }
}
 
// Se não existir um carrinho global válido, cria um novo a partir do armazenamento.
if (!window.carrinho || !Array.isArray(window.carrinho)) {
    window.carrinho = carregarCarrinho();
}

// Cria uma referência local para o carrinho global.
let carrinho = window.carrinho;
window.carrinho = carrinho;
 
/* Esta função garante que cada imagem tenha um caminho válido para ser exibida corretamente no site. */
function caminhoImagem(caminho){
 
    if(!caminho) return "assets/img/placeholder.png";
 
    return caminho.startsWith("assets/img/") ||
           caminho.startsWith("../img/")
        ? caminho
        : `assets/img/${caminho}`;
}
 
/* Esta função padroniza o texto para fazer a busca funcionar mesmo com acentos e letras maiúsculas/minúsculas. */
function normalizarTexto(texto){
 
    return (texto || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}
 
/* RENDERIZAR */
/* Esta função monta os cards dos produtos na página com nome, preço, imagem, descrição e botão de compra. */
// Renderiza a lista de produtos recebida no catálogo.
function renderizar(lista){
 
    // Se não existir a área do catálogo, interrompe a função.
    if(!catalogo) return;
 
    // Limpa o conteúdo atual do catálogo antes de montar os novos cards.
    catalogo.innerHTML = "";
 
    // Percorre cada produto da lista e cria um card para ele.
    lista.forEach(produto => {
 
        // Adiciona o HTML do produto na área do catálogo.
        catalogo.innerHTML += `
 
        <div class="card">
 
            <div class="tag">
                ${produto.promocao}
            </div>
 
            <div class="img-box">
 
                <img
                    class="img-main"
                    src="${caminhoImagem(produto.imagem1)}"
                    alt="${produto.nome}"
                >
 
                <img
                    class="img-hover"
                    src="${caminhoImagem(produto.imagem2)}"
                    alt="${produto.nome}"
                >
 
            </div>
 
            <div class="info">
 
                <h2>${produto.nome}</h2>
 
                <p class="descricao">
                    ${produto.descricao}
                </p>
 
                <div class="estrelas">
                    ★★★★★
                </div>
 
                <div class="preco-box">
 
                    <div class="preco">
                        R$ ${produto.preco.toFixed(2)}
                    </div>
 
                    <div class="preco-antigo">
                        R$ ${(produto.preco + 20).toFixed(2)}
                    </div>
 
                </div>
 
                <button
                    class="btn-comprar"
                    onclick="comprar('${produto.id}')"
                    data-id="${produto.id}"
                >
                    Comprar
                </button>
 
                <div class="produto-detalhes">
 
                    <p>
                        <strong>Cor:</strong>
                        ${produto.cor}
                    </p>
 
                </div>
 
                <div class="botoes"></div>
 <div class="tamanho-box">
    <label>Tamanho:</label>
    <select class="select-tamanho">
        <option value="6mm">6mm</option>
        <option value="8mm">8mm</option>
        <option value="10mm">10mm</option>
        <option value="12mm">12mm</option>
    </select>
</div>
    </select>
</div>
            </div>
 
        </div>
 
        `;
    });
}
 
/* FILTRAR */
/* Aqui os produtos são filtrados por pesquisa e por ordem de preço quando o usuário atualiza os campos de busca. */
// Filtra e ordena a lista de produtos conforme a pesquisa do usuário.
function filtrar(){
 
    // Inicia com todos os produtos.
    let lista = [...produtos];
 
    // Pega o texto digitado e a ordem escolhida.
    const texto = pesquisa ? normalizarTexto(pesquisa.value) : "";
    const ordem = ordenar ? ordenar.value : "padrao";
 
    // Se houver texto digitado, aplica o filtro por conteúdo.
    if(texto){
        lista = lista.filter(produto => {
 
            const campos = [
                produto.nome,
                produto.descricao,
                produto.cor,
                produto.promocao
            ].join(" ");
 
            return normalizarTexto(campos).includes(texto);
        });
    }
 
    if(ordem === "menor"){
        lista = [...lista].sort((a,b) => a.preco - b.preco);
    }
 
    if(ordem === "maior"){
        lista = [...lista].sort((a,b) => b.preco - a.preco);
    }
 
    renderizar(lista);
}
 
/* COMPRAR */
/* Esta função adiciona um produto ao carrinho, aumentando a quantidade se ele já existir. */
// Adiciona um produto ao carrinho ao clicar no botão comprar.
function comprar(id){
 
    if(!id) return;
 
    // Procura o produto pelo id.
    const produto = produtos.find(p => String(p.id) === String(id));

    if(!produto) return;
 
    // Verifica se o mesmo produto já está no carrinho.
    const itemExistente = window.carrinho.find(item =>
        item.id === id
    );
 
    // Se já existir, aumenta a quantidade.
    if(itemExistente){
 
        itemExistente.quantidade++;
 
    } else {
 
        // Se não existir, cria um novo item no carrinho.
        window.carrinho.push({
 
            ...produto,
            quantidade:1
 
        });
    }
 
    // Salva e atualiza a interface do carrinho.
    salvarCarrinho();
    atualizarCarrinho();
    mostrarMensagemCarrinho(produto.nome);
}
 
/* AUMENTAR QUANTIDADE */
/* Incrementa a quantidade do item selecionado no carrinho. */
function aumentarQuantidade(index){
 
const item = window.carrinho[index];
 
    if(!item) return;
 
    item.quantidade++;
 
    salvarCarrinho();
    atualizarCarrinho();
}
 
/* DIMINUIR QUANTIDADE */
/* Reduz a quantidade do item e remove o produto quando chegar a zero. */
function diminuirQuantidade(index){
 
    const item = carrinho[index];
 
    if(!item) return;
 
    item.quantidade--;
 
    if(item.quantidade <= 0){
 
        window.carrinho.splice(index,1);
    }
 
    salvarCarrinho();
    atualizarCarrinho();
}
 
/* REMOVER ITEM */
/* Remove completamente um item do carrinho. */
function removerItem(index){
 
    window.carrinho.splice(index,1);
 
    salvarCarrinho();
    atualizarCarrinho();
}
 
/* ATUALIZAR CARRINHO */
/* Atualiza a lista exibida no modal do carrinho com os itens atuais, quantidades e valor total. */
// Atualiza a interface do carrinho com os itens atuais.
function atualizarCarrinho(){
 
    // Se os elementos do carrinho não existirem, interrompe a função.
    if(!itensCarrinho || !contador || !total) return;
 
    // Limpa os itens antigos antes de montar a lista nova.
    itensCarrinho.innerHTML = "";
 
    // Inicia o total e a quantidade de itens.
    let soma = 0;
    let totalItens = 0;
 
    // Percorre todos os itens do carrinho e monta o HTML deles.
    window.carrinho.forEach((item, index) => {
 
        totalItens += item.quantidade;
 
        soma += item.preco * item.quantidade;
 
        itensCarrinho.innerHTML += `
 
<div class="item-carrinho">
 
    <img src="${caminhoImagem(item.imagem1)}" alt="${item.nome}">
 
    <div class="item-info">
 
        <h3>${item.nome}</h3>
 
        <p>${item.descricao}</p>
 
        <p>
            <strong>Preço:</strong>
            R$ ${item.preco.toFixed(2)}
        </p>
 
        <div class="quantidade-box">
 
            <button
                class="btn-qtd"
                onclick="diminuirQuantidade(${index})"
            >
                -
            </button>
 
            <span class="qtd-num">
                ${item.quantidade}
            </span>
 
            <button
                class="btn-qtd"
                onclick="aumentarQuantidade(${index})"
            >
                +
            </button>
 
        </div>
 
        <button
            class="btn-remover"
            onclick="removerItem(${index})"
        >
            🗑 Remover
        </button>
 
    </div>
 
</div>
 
`;
    });
 
    contador.innerText = totalItens;
    total.innerText = soma.toFixed(2);
}

window.atualizarCarrinho = atualizarCarrinho;
window.salvarCarrinho = salvarCarrinho;
 
/* MODAL */
/* Abre e fecha o painel do carrinho na tela. */
// Abre o modal do carrinho.
function abrirCarrinho(){
 
    // Se o modal existir, mostra ele na tela.
    if(modal){
        modal.style.display = "flex";
    }
}
 
// Fecha o modal do carrinho.
function fecharCarrinho(){
 
    // Se o modal existir, esconde ele.
    if(modal){
        modal.style.display = "none";
    }
}
 
/* REDIRECIONAMENTO DOS SELECTS */
/* Redireciona o usuário para a página da categoria escolhida no menu suspenso. */
function redirecionar(select){
 
    if(!select || !select.value) return;
 
    window.location.href = select.value;
}
 
/* EVENTOS */
/* Aqui são associados os eventos de busca e ordenação à interface. */
// Quando o usuário digitar na pesquisa, chama a função filtrar.
if(pesquisa){
    pesquisa.addEventListener("input", filtrar);
}
 
// Quando mudar a ordenação, chama a função filtrar.
if(ordenar){
    ordenar.addEventListener("change", filtrar);
}
 
/* INICIAR */
/* Este bloco inicializa o catálogo e o carrinho quando a página é carregada. */
// Renderiza todos os produtos ao abrir a página.
renderizar(produtos);
// Atualiza o carrinho na interface logo no início.
atualizarCarrinho();
 
/* PAYPAL */
 
if(typeof paypal !== "undefined"){
 
    paypal.Buttons({
 
        style: {
            color: 'gold',
            shape: 'pill',
            label: 'pay'
        },
 
        createOrder: function(data, actions){
 
            return actions.order.create({
 
                purchase_units: [{
 
                    amount: {
                        value: parseFloat(total.innerText || 0).toFixed(2)
                    }
 
                }]
 
            });
 
        },
 
        onApprove: function(data, actions){
 
            return actions.order.capture().then(function(details){
 
                alert(
                    "Pagamento aprovado por " +
                    details.payer.name.given_name
                );
 
            });
 
        }
 
    }).render('#paypal-button-container');
 
 
}
const pagina = window.location.pathname.split("/").pop().toLowerCase();
 
switch(pagina){

    case "index.html":
        filtrarPorPerfuracao("index");
        break;

    case "daith.html":
        filtrarPorPerfuracao("daith");
        break;

    case "lobulo.html":
        filtrarPorPerfuracao("lobulo");
        break;

    case "upperlobe.html":
        filtrarPorPerfuracao("upperlobe");
        break;

    case "forwardhelix.html":
        filtrarPorPerfuracao("forwardhelix");
        break;

    case "rook.html":
        filtrarPorPerfuracao("rook");
        break;

    case "snug.html":
        filtrarPorPerfuracao("snug");
        break;

    case "flat.html":
        filtrarPorPerfuracao("flat");
        break;

    case "surface.html":
        filtrarPorPerfuracao("surface");
        break;


    case "transversal.html":
        filtrarPorPerfuracao("transversal");
        break;


        case "lingua.html":
            filtrarPorPerfuracao("lingua");
            break;

    case "microdermal.html":
        filtrarPorPerfuracao("microdermal");
        break;

    case "sobrancelha.html":
            filtrarPorPerfuracao("sobrancelha");
            break;

    case "intimofeminino.html":
        filtrarPorPerfuracao("intimofeminino");
        break;

    case "mamilo.html":
        filtrarPorPerfuracao("mamilo");
        break;

    case "abanasal.html":
        filtrarPorPerfuracao("abanasal");
        break;  
        
    case "intimomasculino.html":
        filtrarPorPerfuracao("intimomasculino");
        break; 

    case "septo.html":
        filtrarPorPerfuracao("septo");
        break; 

    case "bridge.html":
        filtrarPorPerfuracao("bridge");
        break;  
        
    case "umbigo.html":
        filtrarPorPerfuracao("umbigo");
        break;   
        
    case "helix.html":
        filtrarPorPerfuracao("helix");
        break;      

    case "tragus.html":
        filtrarPorPerfuracao("tragus");
        break; 
    
    case "labret.html":
        filtrarPorPerfuracao("labret");
        break; 

    case "conch.html":
        filtrarPorPerfuracao("conch");
        break; 

    case "medusa.html":
        filtrarPorPerfuracao("medusa");
        break;  
        
    case "monroe.html":
        filtrarPorPerfuracao("monroe");
        break; 

    case "venom.html":
        filtrarPorPerfuracao("venom");
        break; 

    default:
        renderizar(produtos);
        break;
}

