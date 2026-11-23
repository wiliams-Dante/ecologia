/*const fichasNodos = {
  1: {
    titulo: 'Minería',
    metrica: '9.3M L',
    textoMetrica: 'Agua por tonelada de cobre',
    metricaExplicacion: 'Producir UNA tonelada de cobre refinado consume 9.3 millones de litros de agua. Es equivalente a llenar 3.7 piscinas olímpicas por cada tonelada.',
    texto: 'La minería es la primera etapa del ciclo. Consiste en extraer el mineral de cobre de la roca mediante voladura, trituración y molienda a cielo abierto, ya que el cobre está en concentraciones muy bajas.',
    contexto: 'Esta fase concentra el mayor impacto hídrico y territorial del ciclo. El agua se extrae de cuencas que ya están bajo estrés, y la remoción de tierra altera ecosistemas completos.',
    datoClave: 'Perú es uno de los 5 mayores productores de cobre del mundo. La mina a cielo abierto más profunda del país supera los 1,000 metros.',
    fuente: 'ICA - Perfil Medioambiental del Cobre (2023) · Northey et al. (2014)',
    imagen: '1.jpg'
  },
  2: {
    titulo: 'Cobre',
    metrica: '>50%',
    textoMetrica: 'Demanda global de cobre',
    metricaExplicacion: 'Más de la mitad de la demanda mundial de cobre se destina a aplicaciones eléctricas. Es el metal insustituible no solo para los aparatos, sino para toda la infraestructura de energía renovable.',
    texto: 'El cobre tiene la conductividad eléctrica más alta de los metales. Arequipa y Moquegua son polos mineros clave en el sur del Perú, y gran parte del cobre también proviene de la cuenca del altiplano en Bolivia. Este mineral es vital para la electrificación.',
    contexto: 'El cobre es el recurso más crítico. Su extracción y refinación dominan la carga ambiental de los aparatos eléctricos y de las nuevas infraestructuras solares en regiones como Arequipa.',
    datoClave: 'Arequipa y Moquegua lideran la producción de cobre en el sur peruano. Una instalación de 1 MW de energía solar requiere aprox. 5 toneladas de cobre.',
    fuente: 'IEA (2021) · ICA (2023)',
    imagen: '2.jpg'
  },
  3: {
    titulo: 'Aluminio',
    metrica: '20 MWh',
    textoMetrica: 'Energía por tonelada de aluminio',
    metricaExplicacion: 'Producir una tonelada de aluminio primario requiere entre 17 y 20 MWh de electricidad, convirtiéndolo en uno de los metales con mayor huella energética del mundo.',
    texto: 'El aluminio se extrae de la bauxita. Aunque no es tan buen conductor como el cobre, es más ligero y barato, por lo que se usa en carcasas de refrigeradoras, lavadoras y en los rotores de los motores eléctricos.',
    contexto: 'Su proceso de extracción y refinación (Proceso Bayer) es altamente intensivo en energía. La huella de carbono del aluminio depende directamente de cómo se genere esa electricidad.',
    datoClave: 'El aluminio es 100% reciclable sin perder sus propiedades. Reciclarlo ahorra el 95% de la energía necesaria para producirlo desde cero.',
    fuente: 'International Aluminium Institute · UPC',
    imagen: '3.jpg'
  },
  4: {
    titulo: 'Agua',
    metrica: '9.3M L',
    textoMetrica: 'Huella hídrica por tonelada',
    metricaExplicacion: 'La huella hídrica es el total de agua dulce consumida. En el cobre, el 75% del agua se pierde por evaporación o se contamina, sin poder reutilizarse. Solo el 25% restante se recircula.',
    texto: 'El agua es un recurso crítico en la minería: se usa para la molienda del mineral, la concentración por flotación y el control del polvo. Las cuencas mineras del sur andino peruano presentan niveles críticos de estrés hídrico.',
    contexto: 'La huella hídrica se contabiliza como "consumo de agua azul" (agua superficial y subterránea). En zonas áridas o altoandinas, este consumo compite con el uso agrícola y el consumo humano.',
    datoClave: 'Perú es el 8° país con mayor estrés hídrico del mundo. En Arequipa, las minas del corredor sur andino consumen agua de cuencas que también abastecen a la ciudad.',
    fuente: 'ICA (2023) · WRI (2023) · CooperAcción (2024)',
    imagen: '4.jpg'
  },
  5: {
    titulo: 'Huella Hídrica',
    metrica: '9.3M L',
    textoMetrica: 'Huella Hídrica Directa',
    metricaExplicacion: 'El agua utilizada en la extracción y procesamiento del mineral impacta directamente en las cuencas locales, generando conflictos por el uso del recurso.',
    texto: 'La huella hídrica de la industria eléctrica no solo se mide en el grifo, sino en la mina. Cada tonelada de cobre que llega a un motor o a un panel solar tiene una "mochila" de agua de 9.3 millones de litros.',
    contexto: 'El agua es un recurso transversal. No solo se usa en la mina, sino también en la fundición (para enfriamiento) y en la generación eléctrica (si es hidroeléctrica).',
    datoClave: 'Reciclar cobre ahorra el 85% del agua que se necesitaría para extraerlo de la mina virgen.',
    fuente: 'WRI (2023)',
    imagen: '5.jpg'
  },

  6: {
    titulo: 'Fundición\n(Proceso)',
    metrica: '3.5 t',
    textoMetrica: 'CO₂ por tonelada de cobre',
    metricaExplicacion: 'La fundición y refinación del cobre emite 3,558 kg de CO₂ equivalente por tonelada de cátodo producido. Es como conducir un auto a gasolina durante 14,000 km.',
    texto: 'La fundición transforma el concentrado de cobre en cobre blíster. Luego la refinación electroquímica lo lleva a cátodos de 99.99% de pureza, la pureza necesaria para conductores eléctricos.',
    contexto: 'Esta es la fase más intensiva en energía y la segunda más contaminante después de la extracción. El proceso pirometalúrgico requiere temperaturas de 1,200°C, y la electro-refinación consume miles de kWh.',
    datoClave: 'El 80% del impacto ambiental de un motor eléctrico viene de la extracción y fundición del cobre, no del uso del motor.',
    fuente: 'ICA - Perfil Medioambiental del Cobre (2023) · de Souza et al. (2024)',
    imagen: '6.jpg'
  },
  7: {
    titulo: 'Energía',
    metrica: 'Alto',
    textoMetrica: 'Consumo energético',
    metricaExplicacion: 'La electro-refinación del cobre requiere entre 300 y 400 kWh de electricidad por tonelada de cátodo. Sumando la fundición, el proceso completo consume entre 2,000 y 2,200 kWh por tonelada.',
    texto: 'La energía es el recurso invisible del ciclo. Se usa en la minería (para mover camiones y molinos), en la fundición (para derretir el mineral) y en la refinación (para electrolizar el cobre).',
    contexto: 'La energía consumida en la manufactura se contabiliza como impacto indirecto: si la electricidad es hidroeléctrica, el impacto es bajo; si es termoeléctrica, el impacto es alto.',
    datoClave: 'La producción de aluminio requiere 17-20 MWh por tonelada. Es el metal con mayor huella energética del ciclo.',
    fuente: 'ICA (2023) · International Aluminium Institute',
    imagen: '7.jpg'
  },
  8: {
    titulo: 'Emisiones CO₂',
    metrica: '3,558 kg',
    textoMetrica: 'CO₂eq por tonelada de cátodo',
    metricaExplicacion: 'Este es el dato exacto del inventario de la International Copper Association. Una tonelada de cátodos de cobre genera 3,558 kg de CO₂ equivalente, medidos de la cuna a la puerta.',
    texto: 'Las emisiones provienen de tres fuentes: 1) la quema de combustibles en la fundición, 2) la electricidad de la electro-refinación, y 3) los procesos químicos de la refinación (SO₂).',
    contexto: 'Esta huella de carbono se suma a la de la extracción para calcular el impacto total del cobre. El 60% de las emisiones del cobre se generan en la fundición y refinación.',
    datoClave: 'El cobre reciclado (secundario) emite solo 0.5 t de CO₂ por tonelada, un 85% menos que el cobre primario.',
    fuente: 'ICA - Perfil Medioambiental del Cobre (2023), Tabla 1',
    imagen: '8.jpg'
  },
  9: {
    titulo: 'Motores',
    metrica: '80%',
    textoMetrica: 'Carga ambiental de motores',
    metricaExplicacion: 'El 80% de la carga ambiental total de un motor eléctrico se genera en la extracción y fundición de los metales primarios (cobre y aluminio), no en su uso ni en su ensamblaje.',
    texto: 'Los motores eléctricos son el corazón de los aparatos eléctricos: refrigeradoras, lavadoras, bombas, ventiladores y maquinaria industrial. Sus componentes principales son cobre (bobinas) y aluminio (carcasa y rotores).',
    contexto: 'Este dato demuestra que el mayor impacto de un motor ocurre ANTES de que el usuario lo use. Por eso la minería urbana y el reciclaje son clave.',
    datoClave: 'Cambiar la extracción virgen por cobre reciclado reduce hasta un 85% las emisiones del motor.',
    fuente: 'de Souza et al. (2024) - Análisis de Ciclo de Vida de Motores Eléctricos',
    imagen: '9.jpg'
  },

  10: {
    titulo: 'Aparatos Eléctricos',
    metrica: 'Masivo',
    textoMetrica: 'Crecimiento del stock',
    metricaExplicacion: 'El "stock" es la cantidad total de aparatos eléctricos que existen en los hogares de un país. En Perú, el stock ha crecido más del triple en las últimas dos décadas.',
    texto: 'Los aparatos eléctricos son el producto final del ciclo. Incluyen refrigeradoras, lavadoras, secadoras, termas, luminarias, ventiladores, motores industriales y maquinaria eléctrica.',
    contexto: 'El crecimiento del stock impulsa TODAS las demás etapas: si hay más aparatos en uso, se necesita más cobre, más fundición, más electricidad y se generará más RAEE al final.',
    datoClave: 'Según Gusukuma et al. (2022), los hogares peruanos tienen más aparatos eléctricos que hace 20 años, pero un tercio de ellos son obsoletos.',
    fuente: 'Gusukuma, Kahhat & Cáceres (2022) - Journal of Industrial Ecology',
    imagen: '10.jpg'
  },
  11: {
    titulo: 'Consumo Eléctrico',
    metrica: '~93 kWh',
    textoMetrica: 'Consumo mensual por hogar',
    metricaExplicacion: 'Un hogar peruano promedio consume 93 kWh de electricidad al mes. Una refrigeradora encendida 24/7 consume entre 40 y 60 kWh/mes, más de la mitad del total del hogar.',
    texto: 'Durante su vida útil (10-15 años), un aparato consume electricidad todos los días. La refrigeradora funciona 24/7, la lavadora unas 4 horas por semana, la luminaria 5 horas por noche.',
    contexto: 'El consumo eléctrico es un impacto indirecto: la electricidad no se genera en el hogar, sino en una central hidroeléctrica o termoeléctrica. Por eso el impacto del consumo depende de la matriz del país.',
    datoClave: 'Una refrigeradora peruana consume en sus 12 años de vida lo mismo que 6 meses de consumo eléctrico total de un hogar pequeño.',
    fuente: 'Osinergmin - Anuario Estadístico de Electricidad (2024)',
    imagen: '11.jpg'
  },

  12: {
    titulo: 'Matriz Eléctrica',
    metrica: '~60%',
    textoMetrica: 'Matriz Hidroeléctrica',
    metricaExplicacion: 'En el Perú, alrededor del 60% de la electricidad proviene de centrales hidroeléctricas. Esto significa que el consumo de los aparatos eléctricos depende directamente del agua de nuestros ríos.',
    texto: 'La Matriz Eléctrica es la fuente de donde proviene la energía que consumen los aparatos. Al ser mayoritariamente hidroeléctrica, el uso de electricidad en las ciudades está intrínsecamente ligado a la disponibilidad de agua en la sierra.',
    contexto: 'Este nodo conecta el "Uso" (Consumo Eléctrico) con la "Extracción" (Agua). El impacto de usar un aparato en Arequipa genera una demanda de energía que presiona los recursos hídricos del país.',
    datoClave: 'Si la matriz eléctrica fuera más solar o eólica, el impacto indirecto del consumo de los aparatos sobre el agua sería mucho menor.',
    fuente: 'Osinergmin · MINEM (Balance Nacional de Energía)',
    imagen: '12.jpg'
  },
  13: {
    titulo: 'Transición Energética',
    metrica: '6×',
    textoMetrica: 'Minerales: Renovables vs. Fósiles',
    metricaExplicacion: 'La transición hacia energías limpias (parques solares y eólicos) requiere 6 veces más minerales que la generación con combustibles fósiles. Un panel solar requiere entre 5 y 10 kg de cobre.',
    texto: 'La transición energética global exige enormes cantidades de cobre y aluminio. En Arequipa, la energía solar es un recurso estratégico gracias a su alta radiación, pero cada panel solar requiere cobre y aluminio que provienen de la minería local.',
    contexto: 'Este contexto explica el "efecto boomerang": para dejar de usar combustibles fósiles, necesitamos más cobre. Esta demanda está expandiendo la frontera minera en Perú y Bolivia.',
    datoClave: 'Arequipa tiene un enorme potencial solar, lo que incrementa la demanda de cobre extraído de sus minas y de Moquegua.',
    fuente: 'IEA - The Role of Critical Minerals (2021) · Quintero et al. (Mongabay)',
    imagen: '13.jpg'
  },

  14: {
    titulo: 'RAEE',
    metrica: '62M ton',
    textoMetrica: 'RAEE generado en 2022',
    metricaExplicacion: 'El mundo generó 62 millones de toneladas de Residuos de Aparatos Eléctricos y Electrónicos (RAEE) en 2022. Esta cifra crece 2.6 millones de toneladas cada año.',
    texto: 'La obsolescencia es el proceso por el cual un aparato deja de ser útil antes de que su vida técnica termine. Cuando el aparato se desecha, se convierte en RAEE: un residuo que contiene metales valiosos (cobre, aluminio) y también tóxicos.',
    contexto: 'La obsolescencia acelera el ciclo: si un aparato podría durar 15 años pero se reemplaza a los 8, se extrajeron recursos para 15 años que solo se usaron para 8.',
    datoClave: 'De los 62 millones de toneladas de RAEE generadas, solo el 22.3% se recicló formalmente. El 77.7% restante terminó en vertederos o manos informales.',
    fuente: 'Global E-waste Monitor 2024 (UNITAR) · von Gries & Bringezu',
    imagen: '14.jpg'
  },
  15: {
    titulo: 'Informalidad',
    metrica: '0.4%',
    textoMetrica: 'RAEE tratado formalmente',
    metricaExplicacion: 'En Perú, solo el 0.4% de los RAEE generados pasa por un proceso formal de reciclaje. El 99.6% restante se gestiona de forma informal (chatarreros, vertederos, exportación ilegal).',
    texto: 'La informalidad en el reciclaje es el principal problema del fin de vida en Perú. Los recicladores informales extraen el cobre y el aluminio de los aparatos quemando cables y placas a cielo abierto, sin protección.',
    contexto: 'La informalidad significa que el impacto del fin de vida NO se mitiga. Los metales no se recuperan de forma segura, y la contaminación local se suma al impacto global del ciclo.',
    datoClave: 'Perú genera unas 200,000 toneladas de RAEE al año. Si se reciclaran formalmente, se recuperarían más de 20,000 toneladas de cobre.',
    fuente: 'MINAM - Decreto Legislativo 1502 (2020) · Jurado & Benavides',
    imagen: '15.jpg'
  },
  16: {
    titulo: 'Contaminación',
    metrica: 'Metales Pesados',
    textoMetrica: 'Contaminación por quema',
    metricaExplicacion: 'La quema informal de cables y placas libera dioxinas, plomo y mercurio. Estos metales pesados se acumulan en el suelo y llegan a los ríos, afectando la salud de las comunidades.',
    texto: 'La contaminación es la consecuencia directa de la informalidad. Al no contar con plantas de tratamiento, los residuos se queman o se lixivian, envenenando el agua que luego se usa para la agricultura y el consumo humano.',
    contexto: 'Este nodo cierra el ciclo de impacto ambiental, demostrando que el mal manejo del fin de vida no solo desperdicia recursos, sino que genera una deuda ambiental tóxica en los ecosistemas locales.',
    datoClave: 'Según la OMS, la exposición al plomo de los RAEE causa daños neurológicos irreversibles, especialmente en niños.',
    fuente: 'WRI (2023) · Organización Mundial de la Salud (OMS)',
    imagen: '16.jpg'
  },
  17: {
    titulo: 'Minería Urbana',
    metrica: '10×',
    textoMetrica: 'Más eficiente que minería virgen',
    metricaExplicacion: 'Recuperar una tonelada de cobre de los RAEE consume 10 veces menos energía y agua que extraerla de la mina. La minería urbana convierte los residuos en "minas" ricas en metales.',
    texto: 'La minería urbana es la extracción de metales de los RAEE, edificios viejos o infraestructura obsoleta. Un RAEE de refrigeradora contiene cobre al 60% de pureza (vs. 0.5% en la mina).',
    contexto: 'La minería urbana CIERRA el ciclo: sustituye la extracción primaria por recuperación secundaria. Es la alternativa más eficiente para reducir el impacto total del ciclo de vida.',
    datoClave: 'Reciclar una tonelada de RAEE de cobre evita 3.5 t de CO₂ y ahorra 9.3 millones de litros de agua.',
    fuente: 'Pascuas Rengifo - Implicaciones socioambientales de los aparatos eléctricos',
    imagen: '17.jpg'
  }
};*/
const fichasNodos = {
  1: {
    titulo: 'Minería',
    metrica: '9.3M L',
    textoMetrica: 'Agua por tonelada de cobre',
    metricaExplicacion: 'Producir una tonelada de cobre refinado consume 9.3 millones de litros de agua, equivalente a llenar 3.7 piscinas olímpicas.',
    texto: 'Actividad extractiva que inicia el ciclo: obtiene minerales de la corteza terrestre mediante voladura, trituración y molienda a cielo abierto.',
    contexto: 'Concentra el mayor impacto hídrico y territorial al extraer agua de cuencas bajo estrés y alterar ecosistemas.',
    datoClave: 'Perú es uno de los 5 mayores productores de cobre del mundo. La mina a cielo abierto más profunda del país supera los 1,000 metros.',
    fuente: 'ICA - Perfil Medioambiental del Cobre (2023) · Northey et al. (2014)',
    imagen: '1.jpg'
  },
  2: {
    titulo: 'Cobre',
    metrica: '>50%',
    textoMetrica: 'Demanda global de cobre',
    metricaExplicacion: 'Más de la mitad de la demanda mundial de cobre va a aplicaciones eléctricas, clave para aparatos e infraestructura renovable.',
    texto: 'Tiene la mayor conductividad eléctrica entre los metales. Arequipa, Moquegua y el altiplano boliviano son polos clave para la electrificación.',
    contexto: 'Es el recurso más crítico: su extracción y refinación dominan la carga ambiental de aparatos y proyectos solares en regiones como Arequipa.',
    datoClave: 'Arequipa y Moquegua lideran la producción de cobre en el sur peruano. Una instalación de 1 MW de energía solar requiere aprox. 5 toneladas de cobre.',
    fuente: 'IEA (2021) · ICA (2023)',
    imagen: '2.jpg'
  },
  3: {
    titulo: 'Aluminio',
    metrica: '20 MWh',
    textoMetrica: 'Energía por tonelada de aluminio',
    metricaExplicacion: 'Producir una tonelada de aluminio primario requiere entre 17 y 20 MWh, siendo uno de los metales con mayor huella energética.',
    texto: 'Se extrae de la bauxita. Más ligero y barato que el cobre, se emplea en carcasas de refrigeradoras, lavadoras y rotores de motores.',
    contexto: 'Su extracción y refinación son muy intensivas en energía; su huella de carbono depende de cómo se genere esa electricidad.',
    datoClave: 'El aluminio es 100% reciclable sin perder sus propiedades. Reciclarlo ahorra el 95% de la energía necesaria para producirlo desde cero.',
    fuente: 'International Aluminium Institute · UPC',
    imagen: '3.jpg'
  },
  4: {
    titulo: 'Agua',
    metrica: '9.3M L',
    textoMetrica: 'Huella hídrica por tonelada',
    metricaExplicacion: 'En el cobre, el 75% del agua dulce consumida se pierde por evaporación o contaminación; solo el 25% se recircula.',
    texto: 'Se usa en molienda, flotación y control de polvo. Las cuencas mineras del sur andino peruano enfrentan altos niveles de estrés hídrico.',
    contexto: 'Se contabiliza como consumo de agua azul (superficial y subterránea), compitiendo con el uso agrícola y humano en zonas áridas o altoandinas.',
    datoClave: 'Perú es el 8° país con mayor estrés hídrico del mundo. En Arequipa, las minas del corredor sur andino consumen agua de cuencas que también abastecen a la ciudad.',
    fuente: 'ICA (2023) · WRI (2023) · CooperAcción (2024)',
    imagen: '4.jpg'
  },
  5: {
    titulo: 'Huella Hídrica',
    metrica: '9.3M L',
    textoMetrica: 'Huella Hídrica Directa',
    metricaExplicacion: 'El agua usada en la extracción y procesamiento impacta directamente las cuencas locales y genera conflictos por su uso.',
    texto: 'Cada tonelada de cobre en un motor o panel solar arrastra una "mochila" de 9.3 millones de litros de agua desde la mina.',
    contexto: 'Es un recurso transversal: también interviene en la fundición (enfriamiento) y en la generación eléctrica si es hidroeléctrica.',
    datoClave: 'Reciclar cobre ahorra el 85% del agua que se necesitaría para extraerlo de la mina virgen.',
    fuente: 'WRI (2023)',
    imagen: '5.jpg'
  },

  6: {
    titulo: 'Fundición\n(Proceso)',
    metrica: '3.5 t',
    textoMetrica: 'CO₂ por tonelada de cobre',
    metricaExplicacion: 'Fundir y refinar cobre emite 3,558 kg de CO₂ equivalente por tonelada de cátodo, similar a manejar un auto a gasolina 14,000 km.',
    texto: 'Convierte el concentrado en cobre blíster y luego, por refinación electroquímica, en cátodos de 99.99% de pureza para uso eléctrico.',
    contexto: 'Es la etapa más intensiva en energía y la segunda más contaminante tras la extracción, con hornos a 1,200 °C y alto consumo eléctrico.',
    datoClave: 'El 80% del impacto ambiental de un motor eléctrico viene de la extracción y fundición del cobre, no del uso del motor.',
    fuente: 'ICA - Perfil Medioambiental del Cobre (2023) · de Souza et al. (2024)',
    imagen: '6.jpg'
  },
  7: {
    titulo: 'Energía',
    metrica: 'Alto',
    textoMetrica: 'Consumo energético',
    metricaExplicacion: 'La electro-refinación toma 300–400 kWh/t de cátodo; sumando la fundición, el proceso completo consume entre 2,000 y 2,200 kWh/t.',
    texto: 'Atraviesa todo el ciclo: mueve camiones y molinos en mina, funde el mineral y alimenta la electrólisis en refinación.',
    contexto: 'En manufactura opera como impacto indirecto: es menor con matriz hidroeléctrica y mayor con generación termoeléctrica.',
    datoClave: 'La producción de aluminio requiere 17-20 MWh por tonelada. Es el metal con mayor huella energética del ciclo.',
    fuente: 'ICA (2023) · International Aluminium Institute',
    imagen: '7.jpg'
  },
  8: {
    titulo: 'Emisiones CO₂',
    metrica: '3,558 kg',
    textoMetrica: 'CO₂eq por tonelada de cátodo',
    metricaExplicacion: 'Dato del inventario de la International Copper Association: 3,558 kg de CO₂ equivalente por tonelada de cátodo, de la cuna a la puerta.',
    texto: 'Provienen de tres fuentes: combustibles en la fundición, electricidad en la electro-refinación y procesos químicos (SO₂).',
    contexto: 'Se suma a la extracción para el impacto total; el 60% de las emisiones del cobre ocurre en fundición y refinación.',
    datoClave: 'El cobre reciclado (secundario) emite solo 0.5 t de CO₂ por tonelada, un 85% menos que el cobre primario.',
    fuente: 'ICA - Perfil Medioambiental del Cobre (2023), Tabla 1',
    imagen: '8.jpg'
  },
  9: {
    titulo: 'Motores',
    metrica: '80%',
    textoMetrica: 'Carga ambiental de motores',
    metricaExplicacion: 'El 80% de la carga ambiental de un motor eléctrico ocurre al extraer y fundir cobre y aluminio, no durante su uso ni ensamblaje.',
    texto: 'Impulsan refrigeradoras, lavadoras, bombas, ventiladores y maquinaria, combinando cobre en bobinas y aluminio en carcasa y rotores.',
    contexto: 'Muestra que el mayor impacto sucede antes del uso doméstico, por lo que la minería urbana y el reciclaje son decisivos.',
    datoClave: 'Cambiar la extracción virgen por cobre reciclado reduce hasta un 85% las emisiones del motor.',
    fuente: 'de Souza et al. (2024) - Análisis de Ciclo de Vida de Motores Eléctricos',
    imagen: '9.jpg'
  },

  10: {
    titulo: 'Aparatos Eléctricos',
    metrica: 'Masivo',
    textoMetrica: 'Crecimiento del stock',
    metricaExplicacion: 'El "stock" es el total de aparatos en los hogares; en Perú se ha más que triplicado en las últimas dos décadas.',
    texto: 'Producto final del ciclo: refrigeradoras, lavadoras, secadoras, termas, luminarias, ventiladores y maquinaria eléctrica.',
    contexto: 'Su expansión empuja todo el ciclo: más equipos en uso implican más cobre, fundición, electricidad y futuros RAEE.',
    datoClave: 'Según Gusukuma et al. (2022), los hogares peruanos tienen más aparatos eléctricos que hace 20 años, pero un tercio de ellos son obsoletos.',
    fuente: 'Gusukuma, Kahhat & Cáceres (2022) - Journal of Industrial Ecology',
    imagen: '10.jpg'
  },
  11: {
    titulo: 'Consumo Eléctrico',
    metrica: '~93 kWh',
    textoMetrica: 'Consumo mensual por hogar',
    metricaExplicacion: 'Un hogar peruano consume en promedio 93 kWh/mes; una refrigeradora 24/7 aporta entre 40 y 60 kWh/mes, más de la mitad.',
    texto: 'Durante 10–15 años de vida útil, los aparatos demandan energía a diario, con usos continuos (refrigeradora) o periódicos (lavadora, luces).',
    contexto: 'Es un impacto indirecto generado en centrales hidroeléctricas o termoeléctricas, por lo que depende de la matriz energética.',
    datoClave: 'Una refrigeradora peruana consume en sus 12 años de vida lo mismo que 6 meses de consumo eléctrico total de un hogar pequeño.',
    fuente: 'Osinergmin - Anuario Estadístico de Electricidad (2024)',
    imagen: '11.jpg'
  },

  12: {
    titulo: 'Matriz Eléctrica',
    metrica: '~60%',
    textoMetrica: 'Matriz Hidroeléctrica',
    metricaExplicacion: 'En Perú, cerca del 60% de la electricidad es hidroeléctrica, vinculando el uso de aparatos al agua de los ríos.',
    texto: 'Define el origen de la energía doméstica: al predominar la hidroelectricidad, el consumo urbano depende de la disponibilidad hídrica andina.',
    contexto: 'Conecta el uso (Consumo Eléctrico) con la extracción (Agua): usar aparatos en Arequipa presiona recursos hídricos del país.',
    datoClave: 'Si la matriz eléctrica fuera más solar o eólica, el impacto indirecto del consumo de los aparatos sobre el agua sería mucho menor.',
    fuente: 'Osinergmin · MINEM (Balance Nacional de Energía)',
    imagen: '12.jpg'
  },
  13: {
    titulo: 'Transición Energética',
    metrica: '6×',
    textoMetrica: 'Minerales: Renovables vs. Fósiles',
    metricaExplicacion: 'Las energías limpias exigen 6 veces más minerales que los fósiles; un panel solar requiere entre 5 y 10 kg de cobre.',
    texto: 'Demanda grandes volúmenes de cobre y aluminio; en Arequipa, el alto potencial solar convive con la extracción minera local.',
    contexto: 'Genera un "efecto boomerang": descarbonizar requiere más cobre, ampliando la frontera minera en Perú y Bolivia.',
    datoClave: 'Arequipa tiene un enorme potencial solar, lo que incrementa la demanda de cobre extraído de sus minas y de Moquegua.',
    fuente: 'IEA - The Role of Critical Minerals (2021) · Quintero et al. (Mongabay)',
    imagen: '13.jpg'
  },

  14: {
    titulo: 'RAEE',
    metrica: '62M ton',
    textoMetrica: 'RAEE generado en 2022',
    metricaExplicacion: 'En 2022 se generaron 62 millones de toneladas de RAEE en el mundo, un volumen que crece 2.6 millones de toneladas al año.',
    texto: 'La obsolescencia acorta la vida útil de los aparatos y los convierte en RAEE, residuos con metales valiosos y sustancias tóxicas.',
    contexto: 'Acelera el ciclo: reemplazar a los 8 años un equipo diseñado para 15 desaprovecha recursos extraídos para una vida mayor.',
    datoClave: 'De los 62 millones de toneladas de RAEE generadas, solo el 22.3% se recicló formalmente. El 77.7% restante terminó en vertederos o manos informales.',
    fuente: 'Global E-waste Monitor 2024 (UNITAR) · von Gries & Bringezu',
    imagen: '14.jpg'
  },
  15: {
    titulo: 'Informalidad',
    metrica: '0.4%',
    textoMetrica: 'RAEE tratado formalmente',
    metricaExplicacion: 'En Perú, solo el 0.4% de los RAEE recibe tratamiento formal; el 99.6% va a circuitos informales, vertederos o exportación ilegal.',
    texto: 'Es el principal problema del fin de vida en Perú: se queman cables y placas a cielo abierto y sin protección para recuperar cobre y aluminio.',
    contexto: 'Impide mitigar el impacto del fin de vida: se pierden metales de forma segura y se suma contaminación local al ciclo.',
    datoClave: 'Perú genera unas 200,000 toneladas de RAEE al año. Si se reciclaran formalmente, se recuperarían más de 20,000 toneladas de cobre.',
    fuente: 'MINAM - Decreto Legislativo 1502 (2020) · Jurado & Benavides',
    imagen: '15.jpg'
  },
  16: {
    titulo: 'Contaminación',
    metrica: 'Metales Pesados',
    textoMetrica: 'Contaminación por quema',
    metricaExplicacion: 'Quemar cables y placas libera dioxinas, plomo y mercurio, que se acumulan en suelos y ríos afectando la salud comunitaria.',
    texto: 'Es efecto directo de la informalidad: sin plantas adecuadas, las quemas o lixiviados contaminan agua para riego y consumo.',
    contexto: 'Cierra el círculo del mal manejo al final de la vida útil, dejando una deuda ambiental tóxica en ecosistemas locales.',
    datoClave: 'Según la OMS, la exposición al plomo de los RAEE causa daños neurológicos irreversibles, especialmente en niños.',
    fuente: 'WRI (2023) · Organización Mundial de la Salud (OMS)',
    imagen: '16.jpg'
  },
  17: {
    titulo: 'Minería Urbana',
    metrica: '10×',
    textoMetrica: 'Más eficiente que minería virgen',
    metricaExplicacion: 'Recuperar una tonelada de cobre desde RAEE consume 10 veces menos energía y agua que extraerla de mina virgen.',
    texto: 'Recupera metales de RAEE o infraestructura en desuso; una refrigeradora puede aportar cobre con ~60% de pureza frente a ~0.5% en mina.',
    contexto: 'Cierra el ciclo al reemplazar extracción primaria por secundaria, siendo la vía más eficiente para bajar el impacto total.',
    datoClave: 'Reciclar una tonelada de RAEE de cobre evita 3.5 t de CO₂ y ahorra 9.3 millones de litros de agua.',
    fuente: 'Pascuas Rengifo - Implicaciones socioambientales de los aparatos eléctricos',
    imagen: '17.jpg'
  }
};

const etapasPorGrupo = [
  { nombre: 'ETAPA 1 · EXTRACCIÓN',   inicio: 1,  fin: 5,  color: '#f87171' },
  { nombre: 'ETAPA 2 · MANUFACTURA',  inicio: 6,  fin: 9,  color: '#fb923c' },
  { nombre: 'ETAPA 3 · USO',          inicio: 10, fin: 11, color: '#a78bfa' },
  { nombre: 'ETAPA 4 · FIN DE VIDA',  inicio: 14, fin: 17, color: '#6ee7b7' },
  { nombre: 'Contexto Energético',           inicio: 12, fin: 13, color: '#f1f5f9' },
];

function getEtapa(id) {
  for (const etapa of etapasPorGrupo) {
    if (id >= etapa.inicio && id <= etapa.fin) return etapa.nombre;
  }
  return 'CONCEPTO';
}

function getColorPorEtapa(id) {
  for (const etapa of etapasPorGrupo) {
    if (id >= etapa.inicio && id <= etapa.fin) return etapa.color;
  }
  return '#6ee7b7';
}

function validarCatalogoNodos() {
  const idsFichas = Object.keys(fichasNodos).map(Number);
  const fichas = Object.values(fichasNodos);
  const imagenes = fichas.map(({ imagen }) => imagen);
  const idsValidos = Array.from({ length: 17 }, (_, index) => index + 1);
  const mismoConjunto = (a, b) => a.length === b.length && b.every((id) => a.includes(id));

  if (new Set(idsFichas).size !== 17 || !mismoConjunto(idsFichas, idsValidos)) {
    throw new Error('Deben existir exactamente 17 fichas con IDs únicos del 1 al 17.');
  }
  if (fichas.some((ficha) => !ficha.titulo || !ficha.texto || !ficha.imagen)) {
    throw new Error('Cada ficha debe tener título, información e imagen asignados.');
  }
  if (new Set(imagenes).size !== 17) {
    throw new Error('Cada nodo debe tener una imagen propia y no repetida.');
  }
}
validarCatalogoNodos();

const relaciones = [
  // Extracción
  [1,2],[1,3],[1,4],[4,5],
  // Manufactura
  [2,6],[3,6],[6,7],[6,8],[6,9],
  // Uso
  [9,10],[10,11],
  // Matriz (Conecta Consumo con Agua)
  [11,12],[12,4],[12,7],
  // Transición
  [13,11],
  // Fin de vida
  [10,14],[14,15],[15,16],[16,4],
  [14,17],[17,1]
];

const rutaExposicion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1];

const nodos = Object.entries(fichasNodos)
  .sort(([idA], [idB]) => Number(idA) - Number(idB))
  .map(([idTexto, ficha]) => {
    const id = Number(idTexto);
    return {
      id,
      label: ficha.titulo,
      radius: id === 1 ? 19 : 14,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      dim: 0,
      focus: 0,
      alpha: 0,
      targetAlpha: 0,
      isRutaActual: false,
    };
  });
const indicePorId = new Map(nodos.map((node, index) => [node.id, index]));

const aristas = relaciones.map(([from, to]) => ({ from, to, dim: 0, connect: 0, alpha: 0, targetAlpha: 0 }));
const vecinos = new Map(nodos.map((node) => [node.id, new Set()]));
aristas.forEach(({ from, to }) => {
  vecinos.get(from)?.add(to);
  vecinos.get(to)?.add(from);
});

const canvas = document.getElementById('grafo-2d');
const ctx = canvas.getContext('2d');
let width = 0;
let height = 0;
let pixelRatio = 1;
let zoom = 1;
let panX = 0;
let panY = 0;
let selectedNode = null;
let hoveredNode = null;
let pointerState = null;
let linkDistance = 118;
let repulsion = 1;
let nodeSize = 16;
let lastFrame = 0;
let elapsed = 0;
let viewScale = 1;
let graphVisible = false;
let pinchState = null;
const activePointers = new Map();

let panelDims = { w: 460, h: 500 };
let imgPanelDims = { w: 420, h: 296 };
let panelHideTimer = null;
let isGenerating = false;

let lastTapTime = 0;
let lastTappedNodeId = null;
let pointerMoved = false;

let rutaIndex = 0;
let nodoParpadeanteId = rutaExposicion[0];
const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

const edgeColor = 'rgba(164, 177, 193, 0.25)';
const edgeHighlight = 'rgba(110, 231, 183, 0.8)';

function createLayout() {
  nodos.forEach((node, index) => {
    const angle = index * 2.399963229728653;
    const radius = 170 + (index % 5) * 24;
    node.x = Math.cos(angle) * radius;
    node.y = Math.sin(angle) * radius;
    node.vx = 0;
    node.vy = 0;
    node.radius = node.id === 1 ? nodeSize * 1.5 : nodeSize;
  });
}

function updateUiScale() {
  // En proyectores/pantallas grandes aumenta todo de forma conjunta y moderada.
  // Nunca reduce el texto por debajo del tamaño base del diseño.
  const scale = Math.min(1.35, Math.max(1, Math.min(window.innerWidth / 1440, window.innerHeight / 900)));
  document.documentElement.style.setProperty('--ui-scale', scale.toFixed(3));
}

function limitar(valor, minimo, maximo) {
  return Math.max(minimo, Math.min(maximo, valor));
}

function clampPan() {
  if (!width || !height || !nodos.length) return;
  const graphOffsetX = width > 760 ? 72 * viewScale : 0;
  const scale = viewScale * zoom;
  const posicionesX = nodos.map(node => width / 2 + graphOffsetX + node.x * scale);
  const posicionesY = nodos.map(node => height / 2 + node.y * scale);
  const centroX = (Math.min(...posicionesX) + Math.max(...posicionesX)) / 2;
  const centroY = (Math.min(...posicionesY) + Math.max(...posicionesY)) / 2;

  // El centro del conjunto permanece dentro de la zona central del lienzo.
  // Así nunca se puede arrastrar el mapa completamente fuera de pantalla.
  panX = limitar(panX, width * 0.22 - centroX, width * 0.78 - centroX);
  panY = limitar(panY, height * 0.22 - centroY, height * 0.78 - centroY);
}

function resizeCanvas() {
  updateUiScale();
  const bounds = canvas.getBoundingClientRect();
  // El lienzo está oculto mientras no se abre el modo exposición.
  if (bounds.width < 1 || bounds.height < 1) return;
  width = bounds.width;
  height = bounds.height;
  pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * pixelRatio);
  canvas.height = Math.round(height * pixelRatio);
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  // La escala responde al área útil, con límites para no exagerar nodos en pantallas gigantes.
  viewScale = limitar(Math.min(width, height) / 760, 0.82, 1.35);
  clampPan();
  render(elapsed);
  clampPanelToViewport();
}

function clampPanelToViewport() {
  const panel = document.getElementById('panel-flotante');
  if (!panel || panel.hidden) return;
  const margin = 16;
  let top = parseFloat(panel.style.top) || margin;
  let left = parseFloat(panel.style.left) || margin;
  top = Math.max(margin, Math.min(height - panelDims.h - margin, top));
  left = Math.max(margin, Math.min(width - panelDims.w - margin, left));
  panel.style.top = `${top}px`;
  panel.style.left = `${left}px`;

  const imgPanel = document.getElementById('panel-imagen-flotante');
  if (imgPanel && !imgPanel.hidden) {
      let imgTop = parseFloat(imgPanel.style.top) || margin;
      let imgLeft = parseFloat(imgPanel.style.left) || margin;
      imgTop = Math.max(margin, Math.min(height - imgPanelDims.h - margin, imgTop));
      imgLeft = Math.max(margin, Math.min(width - imgPanelDims.w - margin, imgLeft));
      imgPanel.style.top = `${imgTop}px`;
      imgPanel.style.left = `${imgLeft}px`;
  }
}

function projectNode(node) {
  const graphOffsetX = width > 760 ? 72 * viewScale : 0;
  return {
    x: width / 2 + graphOffsetX + panX + node.x * viewScale * zoom,
    y: height / 2 + panY + node.y * viewScale * zoom,
    scale: viewScale * zoom,
  };
}

function actualizarParpadeo() {
  nodos.forEach(n => n.isRutaActual = (n.id === nodoParpadeanteId));
  const statusEl = document.getElementById('graph-status');
  if (statusEl && nodoParpadeanteId !== null && rutaIndex < rutaExposicion.length) {
    statusEl.textContent = `Paso ${rutaIndex + 1}/${rutaExposicion.length} · sigue el nodo que brilla`;
  }
}

function avanzarRuta() {
  rutaIndex++;
  if (rutaIndex < rutaExposicion.length) {
    nodoParpadeanteId = rutaExposicion[rutaIndex];
    actualizarParpadeo();
  } else {
    nodoParpadeanteId = null;
    actualizarParpadeo();
    document.getElementById('graph-status').textContent = '✓ Ruta completada';
  }
}

function reiniciarRuta() {
  rutaIndex = 0;
  nodoParpadeanteId = rutaExposicion[0];
  actualizarParpadeo();
}

function render(time = 0) {
  if (!ctx || !width || !height) return;
  ctx.clearRect(0, 0, width, height);
  const projected = nodos.map((node) => ({ node, ...projectNode(node) }));
  const byId = new Map(projected.map((point) => [point.node.id, point]));

  aristas.forEach((edge) => {
    if (edge.alpha <= 0.01) return;
    const a = byId.get(edge.from);
    const b = byId.get(edge.to);
    if (!a || !b) return;
    const dimAlpha = (1 - edge.dim * 0.84) * edge.alpha;

    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = edgeColor;
    ctx.globalAlpha = dimAlpha * (1 - edge.connect);
    ctx.lineWidth = 1;
    ctx.stroke();

    if (edge.connect > 0.001) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = edgeHighlight;
      ctx.globalAlpha = dimAlpha * edge.connect;
      ctx.lineWidth = 1 + edge.connect;
      ctx.stroke();
      ctx.restore();
    }
    ctx.globalAlpha = 1;
  });

  projected.forEach((point) => drawNode(point, time));
}

function updateAttention(deltaTime) {
  const activeNode = hoveredNode || selectedNode;
  const neighborSet = activeNode ? vecinos.get(activeNode.id) : null;
  const dt = Math.min(deltaTime / 1000, 0.05);
  const tau = 0.07;
  const k = 1 - Math.exp(-dt / tau);

  nodos.forEach((node) => {
    let dimTarget;
    let focusTarget;
    if (!activeNode) {
      dimTarget = 0;
      focusTarget = 0;
    } else if (node.id === activeNode.id) {
      dimTarget = 0;
      focusTarget = 1;
    } else if (neighborSet?.has(node.id)) {
      dimTarget = 0;
      focusTarget = 0;
    } else {
      dimTarget = 1;
      focusTarget = 0;
    }
    node.dim += (dimTarget - node.dim) * k;
    node.focus += (focusTarget - node.focus) * k;
  });

  aristas.forEach((edge) => {
    const connected = activeNode && (edge.from === activeNode.id || edge.to === activeNode.id);
    const dimTarget = activeNode && !connected ? 1 : 0;
    const connectTarget = connected ? 1 : 0;
    edge.dim += (dimTarget - edge.dim) * k;
    edge.connect += (connectTarget - edge.connect) * k;
  });
}

function drawNode(point, time) {
  const { node, x, y, scale } = point;
  if (node.alpha <= 0.01) return;

  const radiusBase = Math.max(4.5, node.radius * scale);
  const hoverScale = 1 + (node.focus * 0.15);
  const appearScale = 0.5 + 0.5 * node.alpha;
  const radius = radiusBase * appearScale * hoverScale;

  const drawAlpha = node.alpha * (1 - node.dim * 0.75);
  if (drawAlpha <= 0.01) return;

  ctx.save();
  ctx.globalAlpha = drawAlpha;

  const stageColor = getColorPorEtapa(node.id);
  const pulse = 0.5 + Math.sin(time * 0.0014 + node.id * 1.7) * 0.5;

  if (node.focus > 0.05) {
    const glowRadius = radius * (2.5 + pulse * 0.5);
    const glowGradient = ctx.createRadialGradient(x, y, radius * 0.5, x, y, glowRadius);
    glowGradient.addColorStop(0, stageColor + 'cc');
    glowGradient.addColorStop(0.4, stageColor + '55');
    glowGradient.addColorStop(1, stageColor + '00');
    ctx.beginPath();
    ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
    ctx.fillStyle = glowGradient;
    ctx.fill();
  }

  const esParpadeante = node.isRutaActual && (!selectedNode || selectedNode.id !== node.id);
  if (esParpadeante) {
    const pulseRuta = 0.5 + Math.sin(time * 0.005) * 0.5;
    const glowRadius = radius + 10 + pulseRuta * 22;
    const whiteGlow = ctx.createRadialGradient(x, y, radius, x, y, glowRadius);
    whiteGlow.addColorStop(0, 'rgba(255, 255, 255, 0.75)');
    whiteGlow.addColorStop(0.5, 'rgba(255, 255, 255, 0.25)');
    whiteGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.beginPath();
    ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
    ctx.fillStyle = whiteGlow;
    ctx.fill();

    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius + 6 + pulseRuta * 3, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.6 + pulseRuta * 0.4})`;
    ctx.lineWidth = 2.5;
    ctx.setLineDash([8, 8]);
    ctx.lineDashOffset = -time * 0.05;
    ctx.stroke();
    ctx.restore();
  }

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = stageColor;
  ctx.fill();

  if (node.focus > 0.1) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    const isWhiteNode = stageColor === '#f1f5f9';
    ctx.strokeStyle = isWhiteNode ? `rgba(0, 0, 0, ${node.focus})` : `rgba(255,255,255,${node.focus})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  const labelLines = node.label.split('\n');
  const labelFontSize = Math.max(11, 11.5 * scale);
  const labelLineHeight = 14 * scale;
  ctx.font = `${node.focus > 0.5 ? 600 : 500} ${labelFontSize}px Inter, sans-serif`;
  const angle = Math.atan2(node.y, node.x);
  const labelX = x + Math.cos(angle) * (radius + 8);
  const labelAnchorY = y + Math.sin(angle) * (radius + 8);
  const horizontal = Math.cos(angle);
  const vertical = Math.sin(angle);
  ctx.textAlign = horizontal > 0.4 ? 'left' : horizontal < -0.4 ? 'right' : 'center';
  ctx.textBaseline = vertical > 0.35 ? 'top' : vertical < -0.35 ? 'bottom' : 'middle';

  labelLines.forEach((line, index) => {
    const lineOffset = (index - (labelLines.length - 1) / 2) * labelLineHeight;
    const labelY = vertical > 0.35
      ? labelAnchorY + index * labelLineHeight
      : vertical < -0.35
        ? labelAnchorY - (labelLines.length - 1 - index) * labelLineHeight
        : labelAnchorY + lineOffset;
    ctx.lineWidth = Math.max(2.5, 3 * scale);
    ctx.strokeStyle = 'rgba(13, 16, 20, 0.9)';
    ctx.strokeText(line, labelX, labelY);
    ctx.fillStyle = node.focus > 0.5 ? '#ffffff' : '#c5ccd5';
    ctx.fillText(line, labelX, labelY);
  });

  ctx.restore();
}

function stepPhysics(deltaTime, time) {
  const dt = Math.min(deltaTime / 16.67, 2.5);
  const forces = nodos.map(() => ({ x: 0, y: 0 }));
  const minimumGap = 74;

  for (let a = 0; a < nodos.length; a += 1) {
    for (let b = a + 1; b < nodos.length; b += 1) {
      const dx = nodos[b].x - nodos[a].x;
      const dy = nodos[b].y - nodos[a].y;
      const distance = Math.max(Math.hypot(dx, dy), 1);
      const ux = dx / distance;
      const uy = dy / distance;
      const push = repulsion * 400 / (distance * distance);
      forces[a].x -= ux * push;
      forces[a].y -= uy * push;
      forces[b].x += ux * push;
      forces[b].y += uy * push;

      const gap = minimumGap + (nodos[a].radius + nodos[b].radius - 28) * 0.48;
      if (distance < gap) {
        const collision = (gap - distance) * 0.0014;
        forces[a].x -= ux * collision;
        forces[a].y -= uy * collision;
        forces[b].x += ux * collision;
        forces[b].y += uy * collision;
      }
    }
  }

  aristas.forEach(({ from, to }) => {
    const indexA = indicePorId.get(from);
    const indexB = indicePorId.get(to);
    if (indexA === undefined || indexB === undefined) return;

    const a = nodos[indexA];
    const b = nodos[indexB];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const distance = Math.max(Math.hypot(dx, dy), 1);
    const force = (distance - linkDistance) * 0.00024;
    const fx = (dx / distance) * force;
    const fy = (dy / distance) * force;
    forces[indexA].x += fx;
    forces[indexA].y += fy;
    forces[indexB].x -= fx;
    forces[indexB].y -= fy;
  });

  nodos.forEach((node, index) => {
    if (pointerState?.node === node) {
      node.vx = 0;
      node.vy = 0;
      return;
    }
    const centerPull = 0.00018;
    const breathing = 0.003;
    const worldLimit = Math.min(width, height, 1100) / Math.max(viewScale * zoom, 0.1) * 0.32;
    const overflowX = Math.max(0, Math.abs(node.x) - worldLimit);
    const overflowY = Math.max(0, Math.abs(node.y) - worldLimit);
    forces[index].x += -node.x * centerPull - Math.sign(node.x) * overflowX * 0.004 + Math.sin(time * 0.00031 + node.id * 2.1) * breathing;
    forces[index].y += -node.y * centerPull - Math.sign(node.y) * overflowY * 0.004 + Math.cos(time * 0.00027 + node.id * 1.6) * breathing;
    node.vx = (node.vx + forces[index].x * dt) * Math.pow(0.87, dt);
    node.vy = (node.vy + forces[index].y * dt) * Math.pow(0.87, dt);
    const speed = Math.hypot(node.vx, node.vy);
    if (speed > 2) {
      node.vx = (node.vx / speed) * 2;
      node.vy = (node.vy / speed) * 2;
    }
    node.x += node.vx * dt;
    node.y += node.vy * dt;
  });
}

function animate(time) {
  if (!graphVisible) {
    lastFrame = 0;
    requestAnimationFrame(animate);
    return;
  }
  if (!lastFrame) lastFrame = time;
  const deltaTime = Math.min(time - lastFrame, 34);
  lastFrame = time;
  elapsed = time;

  const dtAlpha = Math.min(deltaTime / 1000, 0.05);
  const kAlpha = 1 - Math.exp(-dtAlpha / 0.08);
  nodos.forEach(n => { n.alpha += (n.targetAlpha - n.alpha) * kAlpha; });
  aristas.forEach(a => { a.alpha += (a.targetAlpha - a.alpha) * kAlpha; });

  updateAttention(deltaTime);
  stepPhysics(deltaTime, time);
  clampPan();
  render(time);
  requestAnimationFrame(animate);
}

function pointerPosition(event) {
  const bounds = canvas.getBoundingClientRect();
  return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
}

function nearestNode(x, y) {
  let nearest = null;
  let nearestDistance = Infinity;
  nodos.forEach((node) => {
    if (node.alpha < 0.5) return;
    const point = projectNode(node);
    const distance = Math.hypot(point.x - x, point.y - y);
    const hitRange = Math.max(17, node.radius * point.scale + 8);
    if (distance < hitRange && distance < nearestDistance) {
      nearest = node;
      nearestDistance = distance;
    }
  });
  return nearest;
}

canvas.addEventListener('pointerdown', (event) => {
  if (isGenerating) return;
  const point = pointerPosition(event);
  activePointers.set(event.pointerId, point);
  canvas.setPointerCapture(event.pointerId);

  // Dos dedos permiten desplazar y hacer zoom sin perder el control del encuadre.
  if (activePointers.size >= 2) {
    const points = Array.from(activePointers.values()).slice(0, 2);
    const centerX = (points[0].x + points[1].x) / 2;
    const centerY = (points[0].y + points[1].y) / 2;
    const distance = Math.max(1, Math.hypot(points[1].x - points[0].x, points[1].y - points[0].y));
    const graphOffsetX = width > 760 ? 72 * viewScale : 0;
    const currentScale = viewScale * zoom;
    pinchState = {
      startDistance: distance,
      startZoom: zoom,
      worldX: (centerX - width / 2 - graphOffsetX - panX) / currentScale,
      worldY: (centerY - height / 2 - panY) / currentScale
    };
    pointerState = null;
    canvas.classList.remove('dragging-node');
    canvas.classList.add('panning');
    return;
  }

  const node = nearestNode(point.x, point.y);
  pointerState = { pointerId: event.pointerId, lastX: point.x, lastY: point.y, startX: point.x, startY: point.y, node };
  pointerMoved = false;

  if (node) {
    const now = Date.now();
    if (lastTappedNodeId === node.id && now - lastTapTime < 350) {
      selectedNode = node;
      showNodeInfo(node);
      lastTappedNodeId = null;
      lastTapTime = 0;
    } else {
      lastTappedNodeId = node.id;
      lastTapTime = now;
      selectedNode = node;
      node.vx = 0;
      node.vy = 0;
    }
    canvas.classList.add('dragging-node');
  } else {
    canvas.classList.add('panning');
    lastTappedNodeId = null;
  }
  render(elapsed);
});

canvas.addEventListener('pointermove', (event) => {
  if (isGenerating) return;
  const point = pointerPosition(event);
  if (activePointers.has(event.pointerId)) activePointers.set(event.pointerId, point);

  if (pinchState && activePointers.size >= 2) {
    const points = Array.from(activePointers.values()).slice(0, 2);
    const centerX = (points[0].x + points[1].x) / 2;
    const centerY = (points[0].y + points[1].y) / 2;
    const distance = Math.max(1, Math.hypot(points[1].x - points[0].x, points[1].y - points[0].y));
    zoom = limitar(pinchState.startZoom * (distance / pinchState.startDistance), 0.55, 2.2);
    const graphOffsetX = width > 760 ? 72 * viewScale : 0;
    const nextScale = viewScale * zoom;
    panX = centerX - width / 2 - graphOffsetX - pinchState.worldX * nextScale;
    panY = centerY - height / 2 - pinchState.worldY * nextScale;
    clampPan();
    render(elapsed);
    return;
  }

  if (!pointerState) {
    if (activePointers.size === 0) {
      hoveredNode = nearestNode(point.x, point.y);
      canvas.classList.toggle('node-hover', Boolean(hoveredNode));
      render(elapsed);
    }
    return;
  }
  if (pointerState.pointerId !== event.pointerId) return;

  const deltaX = point.x - pointerState.lastX;
  const deltaY = point.y - pointerState.lastY;

  if (pointerState.node) {
    const node = pointerState.node;
    const distFromStart = Math.hypot(point.x - pointerState.startX, point.y - pointerState.startY);
    if (distFromStart > 5) pointerMoved = true;
    const graphOffsetX = width > 760 ? 72 * viewScale : 0;
    const safeX = limitar(point.x, width * 0.06, width * 0.94);
    const safeY = limitar(point.y, height * 0.08, height * 0.92);
    node.x = (safeX - width / 2 - graphOffsetX - panX) / (viewScale * zoom);
    node.y = (safeY - height / 2 - panY) / (viewScale * zoom);
    node.vx = 0;
    node.vy = 0;
  } else {
    panX += deltaX;
    panY += deltaY;
    clampPan();
  }
  pointerState.lastX = point.x;
  pointerState.lastY = point.y;
  render(elapsed);
});

function endPointer(event) {
  if (event?.pointerId !== undefined) activePointers.delete(event.pointerId);
  if (pinchState) {
    pinchState = null;
    pointerState = null;
    canvas.classList.remove('panning', 'dragging-node');
  } else if (pointerState && (event?.pointerId === undefined || pointerState.pointerId === event.pointerId)) {
    if (pointerState.node) {
      pointerState.node.vx *= 0.12;
      pointerState.node.vy *= 0.12;
    }
    pointerState = null;
    canvas.classList.remove('panning', 'dragging-node');
  }
  if (event?.pointerId !== undefined && canvas.hasPointerCapture(event.pointerId)) {
    canvas.releasePointerCapture(event.pointerId);
  }
  if (activePointers.size === 0) pinchState = null;
}
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', endPointer);

canvas.addEventListener('pointerleave', () => {
  if (!pointerState && !pinchState && activePointers.size === 0 && !isGenerating) {
    hoveredNode = null;
    render(elapsed);
  }
});

canvas.addEventListener('wheel', (event) => {
  if (isGenerating) return;
  event.preventDefault();
  const point = pointerPosition(event);
  const oldScale = viewScale * zoom;
  const nextZoom = limitar(zoom * (event.deltaY < 0 ? 1.08 : 0.92), 0.55, 2.2);
  const nextScale = viewScale * nextZoom;
  const graphOffsetX = width > 760 ? 72 * viewScale : 0;
  const worldX = (point.x - width / 2 - graphOffsetX - panX) / oldScale;
  const worldY = (point.y - height / 2 - panY) / oldScale;
  zoom = nextZoom;
  panX = point.x - width / 2 - graphOffsetX - worldX * nextScale;
  panY = point.y - height / 2 - worldY * nextScale;
  clampPan();
  render(elapsed);
}, { passive: false });


function showNodeInfo(node) {
  const detail = fichasNodos[node.id];
  const cleanTitle = (detail?.titulo || node.label).split('\n')[0];
  const panel = document.getElementById('panel-flotante');
  const imgPanel = document.getElementById('panel-imagen-flotante');
  if (!panel || !imgPanel) return;

  if (panelHideTimer) {
    clearTimeout(panelHideTimer);
    panelHideTimer = null;
  }

  const wasVisible = !panel.hidden && panel.classList.contains('visible');

  document.getElementById('panel-etapa').textContent = getEtapa(node.id);
  document.getElementById('info-titulo').textContent = cleanTitle;
  document.getElementById('info-titulo').style.color = getColorPorEtapa(node.id);

  const metric = panel.querySelector('.metrica-numero');
  const metricLabel = panel.querySelector('.metrica-texto');
  const metricExpl = document.getElementById('metrica-explicacion');
  const contextoEl = document.getElementById('panel-contexto');
  const datoClaveEl = panel.querySelector('.dato-clave-texto');

  if (detail) {
    metric.textContent = detail.metrica || '—';
    metricLabel.textContent = detail.textoMetrica || 'Métrica de impacto';
    metricExpl.textContent = detail.metricaExplicacion || '';
    document.getElementById('info-texto').textContent = detail.texto || '';
    contextoEl.textContent = detail.contexto || '';
    datoClaveEl.textContent = detail.datoClave || '';
    document.getElementById('info-fuente').innerHTML = `<strong>Fuente:</strong> ${escapeHTML(detail.fuente || '—')}`;
  } else {
    metric.textContent = '—';
    metricLabel.textContent = 'Dato en investigación';
    metricExpl.textContent = 'Este nodo aún no tiene información validada.';
    document.getElementById('info-texto').textContent = `Concepto: ${cleanTitle}.`;
    contextoEl.textContent = '';
    datoClaveEl.textContent = '';
    document.getElementById('info-fuente').innerHTML = '<strong>Fuente:</strong> [Cita pendiente]';
  }

  metric.style.color = getColorPorEtapa(node.id);

  const imgElement = document.getElementById('panel-imagen');
  const imagePath = detail?.imagen;
  imgElement.dataset.nodeId = String(node.id);
  imgElement.onload = () => {
    // Ignora una carga tardía si ya se seleccionó otro nodo.
    if (imgElement.dataset.nodeId !== String(node.id)) return;
    imgPanel.hidden = false;
    updatePanelPosition();
    if (!panel.hidden) requestAnimationFrame(() => imgPanel.classList.add('visible'));
  };
  imgElement.onerror = () => {
    if (imgElement.dataset.nodeId !== String(node.id)) return;
    imgPanel.classList.remove('visible');
    imgPanel.hidden = true;
    console.warn(`No se pudo cargar la imagen del nodo ${node.id}: ${imagePath}`);
  };

  if (imagePath) {
    imgElement.alt = `Imagen del concepto ${cleanTitle}`;
    imgPanel.hidden = false;
    imgPanel.classList.remove('visible');
    imgElement.src = imagePath;
  } else {
    imgElement.removeAttribute('src');
    imgPanel.hidden = true;
    imgPanel.classList.remove('visible');
  }

  if (wasVisible) {
    panelDims.w = panel.offsetWidth || 460;
    panelDims.h = panel.offsetHeight || 500;
    updatePanelPosition();
    if (!imgPanel.hidden) requestAnimationFrame(() => imgPanel.classList.add('visible'));
  } else {
    panel.hidden = false;
    panel.classList.remove('visible');
    panelDims.w = panel.offsetWidth || 460;
    panelDims.h = panel.offsetHeight || 500;
    updatePanelPosition();
    requestAnimationFrame(() => {
        panel.classList.add('visible');
        if (!imgPanel.hidden) imgPanel.classList.add('visible');
    });
  }
}

function clearNodeInfo() {
  const panel = document.getElementById('panel-flotante');
  const imgPanel = document.getElementById('panel-imagen-flotante');
  if (!panel || !imgPanel) return;
  panel.classList.remove('visible');
  imgPanel.classList.remove('visible');
  if (panelHideTimer) clearTimeout(panelHideTimer);
  panelHideTimer = window.setTimeout(() => {
    if (!panel.classList.contains('visible')) panel.hidden = true;
    if (!imgPanel.classList.contains('visible')) imgPanel.hidden = true;
    panelHideTimer = null;
  }, 200);
}
function updatePanelPosition() {
  if (!selectedNode) return;
  const panel = document.getElementById('panel-flotante');
  const imgPanel = document.getElementById('panel-imagen-flotante');
  if (!panel || panel.hidden) return;

  const p = projectNode(selectedNode);
  const nodeRadiusScreen = selectedNode.radius * p.scale;
  const margin = 16;

  // 1. Posición principal: El panel de TEXTO
  let top = p.y - nodeRadiusScreen - panelDims.h - margin;
  if (top < margin) {
    top = p.y + nodeRadiusScreen + margin;
  }
  // Clamp del texto: Este panel SÍ o SÍ debe verse dentro de la pantalla
  top = Math.max(margin, Math.min(height - panelDims.h - margin, top));

  let left = p.x - panelDims.w / 2;
  left = Math.max(margin, Math.min(width - panelDims.w - margin, left));

  panel.style.top = `${top}px`;
  panel.style.left = `${left}px`;

  // 2. Posición secundaria: El panel de IMAGEN (Anticolisión)
  if (!imgPanel.hidden) {
    imgPanelDims.w = imgPanel.offsetWidth || 420;
    imgPanelDims.h = imgPanel.offsetHeight || 296;

    let imgLeft, imgTop;
    
    // Calculamos el espacio real disponible en los 4 lados del panel de texto
    const spaceLeft = left;
    const spaceRight = width - (left + panelDims.w);
    const spaceTop = top;
    const spaceBottom = height - (top + panelDims.h);

    // Evaluamos dónde cabe la imagen completamente
    if (spaceLeft >= imgPanelDims.w + margin) {
        // Cabe a la IZQUIERDA
        imgLeft = left - imgPanelDims.w - margin;
        imgTop = Math.max(margin, Math.min(height - imgPanelDims.h - margin, top));
    } 
    else if (spaceRight >= imgPanelDims.w + margin) {
        // Cabe a la DERECHA
        imgLeft = left + panelDims.w + margin;
        imgTop = Math.max(margin, Math.min(height - imgPanelDims.h - margin, top));
    } 
    else if (spaceTop >= imgPanelDims.h + margin) {
        // Cabe ARRIBA
        imgTop = top - imgPanelDims.h - margin;
        imgLeft = Math.max(margin, Math.min(width - imgPanelDims.w - margin, left + (panelDims.w - imgPanelDims.w) / 2));
    } 
    else if (spaceBottom >= imgPanelDims.h + margin) {
        // Cabe ABAJO
        imgTop = top + panelDims.h + margin;
        imgLeft = Math.max(margin, Math.min(width - imgPanelDims.w - margin, left + (panelDims.w - imgPanelDims.w) / 2));
    } 
    else {
        // PANTALLAS PEQUEÑAS: No cabe entera en ningún lado. 
        // La enviamos al lado con MAYOR espacio para que no pise el texto.
        const maxSpace = Math.max(spaceLeft, spaceRight, spaceTop, spaceBottom);
        
        if (maxSpace === spaceLeft) {
            imgLeft = left - imgPanelDims.w - margin;
            imgTop = top;
        } else if (maxSpace === spaceRight) {
            imgLeft = left + panelDims.w + margin;
            imgTop = top;
        } else if (maxSpace === spaceTop) {
            imgTop = top - imgPanelDims.h - margin;
            imgLeft = left + (panelDims.w - imgPanelDims.w) / 2;
        } else {
            imgTop = top + panelDims.h + margin;
            imgLeft = left + (panelDims.w - imgPanelDims.w) / 2;
        }
        // Nota clave: NO aplicamos clamp general aquí. 
        // Es preferible hacer overflow (que se corte un pedazo de imagen) a que se superponga al texto.
    }

    imgPanel.style.top = `${imgTop}px`;
    imgPanel.style.left = `${imgLeft}px`;
  }
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

document.getElementById('cerrar-panel').addEventListener('click', () => {
  const eraParpadeante = selectedNode && selectedNode.id === nodoParpadeanteId;
  selectedNode = null;
  clearNodeInfo();
  render(elapsed);
  if (eraParpadeante) avanzarRuta();
});


document.getElementById('btn-generar-grafo').addEventListener('click', () => {
  if (isGenerating) return;
  isGenerating = true;
  selectedNode = null;
  hoveredNode = null;
  clearNodeInfo();

  nodos.forEach(n => { n.alpha = 0; n.targetAlpha = 0; n.focus = 0; n.isRutaActual = false; });
  aristas.forEach(a => { a.alpha = 0; a.targetAlpha = 0; });
  createLayout();

  reiniciarRuta();

  const btn = document.getElementById('btn-generar-grafo');
  btn.classList.add('generando');
  btn.textContent = '⏳ Generando...';
  document.getElementById('graph-status').textContent = 'Construyendo el mapa...';

  let nodoIndex = 0;

  function animarNodos() {
    if (nodoIndex < nodos.length) {
      nodos[nodoIndex].targetAlpha = 1;
      nodoIndex++;
      setTimeout(animarNodos, 80);
    } else {
      let aristaIndex = 0;
      function animarAristas() {
        if (aristaIndex < aristas.length) {
          aristas[aristaIndex].targetAlpha = 1;
          aristaIndex++;
          setTimeout(animarAristas, 40);
        } else {
          setTimeout(() => {
            isGenerating = false;
            btn.classList.remove('generando');
            btn.textContent = '⚡ Generar grafo';
            actualizarParpadeo();
          }, 400);
        }
      }
      animarAristas();
    }
  }
  animarNodos();
});

/* ==========================================================
   SLIDERS Y CONTROLES
   ========================================================== */
document.getElementById('slider-distancia').addEventListener('input', (event) => {
  linkDistance = Number(event.target.value) * 1.18;
  document.getElementById('distancia-valor').value = `${event.target.value}%`;
});
document.getElementById('slider-tamano').addEventListener('input', (event) => {
  nodeSize = Number(event.target.value);
  nodos.forEach((node) => { node.radius = node.id === 1 ? nodeSize * 1.5 : nodeSize; });
  document.getElementById('tamano-valor').value = nodeSize;
});
document.getElementById('slider-repulsion').addEventListener('input', (event) => {
  repulsion = Number(event.target.value) / 100;
  document.getElementById('repulsion-valor').value = `${event.target.value}%`;
});
document.getElementById('zoom-in').addEventListener('click', () => { zoom = Math.min(2.2, zoom * 1.15); clampPan(); render(elapsed); });
document.getElementById('zoom-out').addEventListener('click', () => { zoom = Math.max(0.55, zoom / 1.15); clampPan(); render(elapsed); });

document.getElementById('reset-graph').addEventListener('click', () => {
  // Recupera el encuadre sin regenerar nodos, cerrar fichas ni reiniciar la ruta.
  zoom = 1;
  panX = 0;
  panY = 0;
  clampPan();
  render(elapsed);
});

function updateScrollProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('scroll-progress').style.width = `${maxScroll > 0 ? window.scrollY / maxScroll * 100 : 0}%`;
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });
const graphModal = document.getElementById('graph-modal');
const openGraphButton = document.getElementById('abrir-grafo');
const closeGraphButton = document.getElementById('cerrar-grafo');

function abrirGrafo() {
  graphModal.hidden = false;
  graphModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('graph-modal-open');
  graphVisible = true;
  lastFrame = 0;
  requestAnimationFrame(() => {
    resizeCanvas();
    if (selectedNode) updatePanelPosition();
    closeGraphButton.focus();
  });
}

function cerrarGrafo() {
  graphVisible = false;
  graphModal.setAttribute('aria-hidden', 'true');
  graphModal.hidden = true;
  document.body.classList.remove('graph-modal-open');
  activePointers.clear();
  pointerState = null;
  pinchState = null;
  canvas.classList.remove('panning', 'dragging-node');
  openGraphButton.focus();
}

openGraphButton.addEventListener('click', abrirGrafo);
closeGraphButton.addEventListener('click', cerrarGrafo);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !graphModal.hidden) cerrarGrafo();
});

window.addEventListener('resize', resizeCanvas);

const cardObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.tarjeta-investigacion').forEach((card) => cardObserver.observe(card));

// Entradas suaves y escalonadas para las fases y los hallazgos de conclusiones.
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.18 });

document.querySelectorAll('.ruta-card, .conclusion-card').forEach((card) => {
  revealObserver.observe(card);
});

function animateCounter(element) {
  if (element.dataset.countAnimated === 'true') return;
  element.dataset.countAnimated = 'true';

  const target = Number(element.dataset.countTo);
  const decimals = Number(element.dataset.decimals || 0);
  if (!Number.isFinite(target)) return;
  if (prefersReducedMotion) {
    element.textContent = target.toFixed(decimals);
    return;
  }

  const duration = 1050;
  const startTime = performance.now();
  const update = (now) => {
    const progress = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = (target * eased).toFixed(decimals);
    if (progress < 1) requestAnimationFrame(update);
    else element.textContent = target.toFixed(decimals);
  };
  requestAnimationFrame(update);
}

const statisticBlock = document.querySelector('.conclusion-stat');
if (statisticBlock) {
  const statisticObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      statisticBlock.classList.add('is-visible');
      statisticBlock.querySelectorAll('[data-count-to]').forEach(animateCounter);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.35 });
  statisticObserver.observe(statisticBlock);
}

function typeTitle() {
  const title = 'Impacto del uso de los recursos en la industria de aparatos eléctricos';
  const target = document.getElementById('typewriter');
  let index = 0;
  const type = () => {
    if (index < title.length) {
      target.textContent += title.charAt(index++);
      window.setTimeout(type, 32);
    }
  };
  type();
}

document.body.classList.add('motion-ready');
createLayout();
nodos.forEach(n => { n.alpha = 0; n.targetAlpha = 0; n.isRutaActual = false; });
aristas.forEach(a => { a.alpha = 0; a.targetAlpha = 0; });

updateUiScale();
typeTitle();
requestAnimationFrame(animate);
