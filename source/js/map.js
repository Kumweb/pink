// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [59.938635, 30.323118],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 17,
    controls: ["zoomControl"],
    behaviors: ["drag"],
  });

  var placemark = new ymaps.Placemark(
    [59.938635, 30.323118],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/icon-map-marker.svg",
      iconImageSize: [36, 36],
      iconImageOffset: [-20, -20],
    }
  );
  // myGeoObject = new ymaps.GeoObject({
  //     // Описание геометрии.
  //     geometry: {
  //         type: "Point",
  //         coordinates: [55.8, 37.8]
  //     },
  //     // Свойства.
  //     properties: {
  //         // Контент метки.
  //         iconContent: 'Я тащусь',
  //         hintContent: 'Ну давай уже тащи'
  //     }
  // })

  myMap.geoObjects.add(placemark);
}
