var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_village_santandrea_1 = new ol.format.GeoJSON();
var features_village_santandrea_1 = format_village_santandrea_1.readFeatures(json_village_santandrea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_village_santandrea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_village_santandrea_1.addFeatures(features_village_santandrea_1);
var lyr_village_santandrea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_village_santandrea_1, 
                style: style_village_santandrea_1,
                popuplayertitle: 'village_santandrea',
                interactive: true,
                title: '<img src="styles/legend/village_santandrea_1.png" /> village_santandrea'
            });
var format_santalucia_castellu_2 = new ol.format.GeoJSON();
var features_santalucia_castellu_2 = format_santalucia_castellu_2.readFeatures(json_santalucia_castellu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_santalucia_castellu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_santalucia_castellu_2.addFeatures(features_santalucia_castellu_2);
var lyr_santalucia_castellu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_santalucia_castellu_2, 
                style: style_santalucia_castellu_2,
                popuplayertitle: 'santalucia_castellu',
                interactive: true,
                title: '<img src="styles/legend/santalucia_castellu_2.png" /> santalucia_castellu'
            });
var format_voiedouce_n4_3 = new ol.format.GeoJSON();
var features_voiedouce_n4_3 = format_voiedouce_n4_3.readFeatures(json_voiedouce_n4_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voiedouce_n4_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_voiedouce_n4_3.addFeatures(features_voiedouce_n4_3);
var lyr_voiedouce_n4_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_voiedouce_n4_3, 
                style: style_voiedouce_n4_3,
                popuplayertitle: 'voiedouce_n4',
                interactive: true,
                title: '<img src="styles/legend/voiedouce_n4_3.png" /> voiedouce_n4'
            });
var format_village_santandrea2_4 = new ol.format.GeoJSON();
var features_village_santandrea2_4 = format_village_santandrea2_4.readFeatures(json_village_santandrea2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_village_santandrea2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_village_santandrea2_4.addFeatures(features_village_santandrea2_4);
var lyr_village_santandrea2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_village_santandrea2_4, 
                style: style_village_santandrea2_4,
                popuplayertitle: 'village_santandrea2',
                interactive: true,
                title: '<img src="styles/legend/village_santandrea2_4.png" /> village_santandrea2'
            });
var format_PARCELLE2_5 = new ol.format.GeoJSON();
var features_PARCELLE2_5 = format_PARCELLE2_5.readFeatures(json_PARCELLE2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARCELLE2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARCELLE2_5.addFeatures(features_PARCELLE2_5);
var lyr_PARCELLE2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARCELLE2_5, 
                style: style_PARCELLE2_5,
                popuplayertitle: 'PARCELLE2',
                interactive: true,
                title: '<img src="styles/legend/PARCELLE2_5.png" /> PARCELLE2'
            });
var format_mairie_village_6 = new ol.format.GeoJSON();
var features_mairie_village_6 = format_mairie_village_6.readFeatures(json_mairie_village_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mairie_village_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mairie_village_6.addFeatures(features_mairie_village_6);
var lyr_mairie_village_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mairie_village_6, 
                style: style_mairie_village_6,
                popuplayertitle: 'mairie_village',
                interactive: true,
    title: 'mairie_village<br />\
    <img src="styles/legend/mairie_village_6_0.png" /> route_trottoir<br />\
    <img src="styles/legend/mairie_village_6_1.png" /> A entrtenir<br />\
    <img src="styles/legend/mairie_village_6_2.png" /> <br />' });
var format_point_7 = new ol.format.GeoJSON();
var features_point_7 = format_point_7.readFeatures(json_point_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_7.addFeatures(features_point_7);
var lyr_point_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_7, 
                style: style_point_7,
                popuplayertitle: 'point',
                interactive: true,
                title: '<img src="styles/legend/point_7.png" /> point'
            });
var group_autres_sentiers = new ol.layer.Group({
                                layers: [lyr_village_santandrea_1,lyr_santalucia_castellu_2,lyr_voiedouce_n4_3,lyr_village_santandrea2_4,],
                                fold: 'close',
                                title: 'autres_sentiers'});

lyr_OpenStreetMap_0.setVisible(true);lyr_village_santandrea_1.setVisible(true);lyr_santalucia_castellu_2.setVisible(true);lyr_voiedouce_n4_3.setVisible(true);lyr_village_santandrea2_4.setVisible(true);lyr_PARCELLE2_5.setVisible(true);lyr_mairie_village_6.setVisible(true);lyr_point_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_autres_sentiers,lyr_PARCELLE2_5,lyr_mairie_village_6,lyr_point_7];
lyr_village_santandrea_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_santalucia_castellu_2.set('fieldAliases', {'id': 'id', });
lyr_voiedouce_n4_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_village_santandrea2_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_PARCELLE2_5.set('fieldAliases', {'NUMERO': 'NUMERO', 'FEUILLE': 'FEUILLE', 'SECTION': 'SECTION', 'CODE_DEP': 'CODE_DEP', 'NOM_COM': 'NOM_COM', 'CODE_COM': 'CODE_COM', 'COM_ABS': 'COM_ABS', 'CODE_ARR': 'CODE_ARR', });
lyr_mairie_village_6.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_point_7.set('fieldAliases', {'id': 'id', 'NOM': 'NOM', 'TYPE': 'TYPE', });
lyr_village_santandrea_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_santalucia_castellu_2.set('fieldImages', {'id': 'TextEdit', });
lyr_voiedouce_n4_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_village_santandrea2_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_PARCELLE2_5.set('fieldImages', {'NUMERO': 'TextEdit', 'FEUILLE': 'Range', 'SECTION': 'TextEdit', 'CODE_DEP': 'TextEdit', 'NOM_COM': 'TextEdit', 'CODE_COM': 'TextEdit', 'COM_ABS': 'TextEdit', 'CODE_ARR': 'TextEdit', });
lyr_mairie_village_6.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_point_7.set('fieldImages', {'id': 'TextEdit', 'NOM': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_village_santandrea_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_santalucia_castellu_2.set('fieldLabels', {'id': 'no label', });
lyr_voiedouce_n4_3.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_village_santandrea2_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_PARCELLE2_5.set('fieldLabels', {'NUMERO': 'no label', 'FEUILLE': 'no label', 'SECTION': 'no label', 'CODE_DEP': 'no label', 'NOM_COM': 'no label', 'CODE_COM': 'no label', 'COM_ABS': 'no label', 'CODE_ARR': 'no label', });
lyr_mairie_village_6.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_point_7.set('fieldLabels', {'id': 'no label', 'NOM': 'no label', 'TYPE': 'no label', });
lyr_point_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});