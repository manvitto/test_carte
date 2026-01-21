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
var format_parcellaire_1 = new ol.format.GeoJSON();
var features_parcellaire_1 = format_parcellaire_1.readFeatures(json_parcellaire_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcellaire_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcellaire_1.addFeatures(features_parcellaire_1);
var lyr_parcellaire_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcellaire_1, 
                style: style_parcellaire_1,
                popuplayertitle: 'parcellaire',
                interactive: true,
                title: '<img src="styles/legend/parcellaire_1.png" /> parcellaire'
            });
var format_4_4village_santandrea_2 = new ol.format.GeoJSON();
var features_4_4village_santandrea_2 = format_4_4village_santandrea_2.readFeatures(json_4_4village_santandrea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4_4village_santandrea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_4village_santandrea_2.addFeatures(features_4_4village_santandrea_2);
var lyr_4_4village_santandrea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4_4village_santandrea_2, 
                style: style_4_4village_santandrea_2,
                popuplayertitle: '4_4 village_sant\'andrea',
                interactive: true,
                title: '<img src="styles/legend/4_4village_santandrea_2.png" /> 4_4 village_sant\'andrea'
            });
var format_4_3village_santandrea_3 = new ol.format.GeoJSON();
var features_4_3village_santandrea_3 = format_4_3village_santandrea_3.readFeatures(json_4_3village_santandrea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4_3village_santandrea_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_3village_santandrea_3.addFeatures(features_4_3village_santandrea_3);
var lyr_4_3village_santandrea_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4_3village_santandrea_3, 
                style: style_4_3village_santandrea_3,
                popuplayertitle: '4_3 village_sant\'andrea',
                interactive: true,
                title: '<img src="styles/legend/4_3village_santandrea_3.png" /> 4_3 village_sant\'andrea'
            });
var format_4_2village_santalucia_4 = new ol.format.GeoJSON();
var features_4_2village_santalucia_4 = format_4_2village_santalucia_4.readFeatures(json_4_2village_santalucia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4_2village_santalucia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_2village_santalucia_4.addFeatures(features_4_2village_santalucia_4);
var lyr_4_2village_santalucia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4_2village_santalucia_4, 
                style: style_4_2village_santalucia_4,
                popuplayertitle: '4_2 village_santa lucia',
                interactive: true,
                title: '<img src="styles/legend/4_2village_santalucia_4.png" /> 4_2 village_santa lucia'
            });
var format_4_1mairie_village_5 = new ol.format.GeoJSON();
var features_4_1mairie_village_5 = format_4_1mairie_village_5.readFeatures(json_4_1mairie_village_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4_1mairie_village_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_1mairie_village_5.addFeatures(features_4_1mairie_village_5);
var lyr_4_1mairie_village_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4_1mairie_village_5, 
                style: style_4_1mairie_village_5,
                popuplayertitle: '4_1 mairie_village',
                interactive: true,
                title: '<img src="styles/legend/4_1mairie_village_5.png" /> 4_1 mairie_village'
            });
var format_3_8pisterutali_6 = new ol.format.GeoJSON();
var features_3_8pisterutali_6 = format_3_8pisterutali_6.readFeatures(json_3_8pisterutali_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_8pisterutali_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_8pisterutali_6.addFeatures(features_3_8pisterutali_6);
var lyr_3_8pisterutali_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3_8pisterutali_6, 
                style: style_3_8pisterutali_6,
                popuplayertitle: '3_8 pisterutali',
                interactive: true,
                title: '<img src="styles/legend/3_8pisterutali_6.png" /> 3_8 pisterutali'
            });
var format_3_7n4_lotsaintfrancois_7 = new ol.format.GeoJSON();
var features_3_7n4_lotsaintfrancois_7 = format_3_7n4_lotsaintfrancois_7.readFeatures(json_3_7n4_lotsaintfrancois_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_7n4_lotsaintfrancois_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_7n4_lotsaintfrancois_7.addFeatures(features_3_7n4_lotsaintfrancois_7);
var lyr_3_7n4_lotsaintfrancois_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3_7n4_lotsaintfrancois_7, 
                style: style_3_7n4_lotsaintfrancois_7,
                popuplayertitle: '3_7 n4_lotsaintfrancois',
                interactive: true,
                title: '<img src="styles/legend/3_7n4_lotsaintfrancois_7.png" /> 3_7 n4_lotsaintfrancois'
            });
var format_3_6ortale_rutali_8 = new ol.format.GeoJSON();
var features_3_6ortale_rutali_8 = format_3_6ortale_rutali_8.readFeatures(json_3_6ortale_rutali_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_6ortale_rutali_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_6ortale_rutali_8.addFeatures(features_3_6ortale_rutali_8);
var lyr_3_6ortale_rutali_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3_6ortale_rutali_8, 
                style: style_3_6ortale_rutali_8,
                popuplayertitle: '3_6 ortale_rutali',
                interactive: true,
                title: '<img src="styles/legend/3_6ortale_rutali_8.png" /> 3_6 ortale_rutali'
            });
var format_3_5ortale_montegrossu_9 = new ol.format.GeoJSON();
var features_3_5ortale_montegrossu_9 = format_3_5ortale_montegrossu_9.readFeatures(json_3_5ortale_montegrossu_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_5ortale_montegrossu_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_5ortale_montegrossu_9.addFeatures(features_3_5ortale_montegrossu_9);
var lyr_3_5ortale_montegrossu_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3_5ortale_montegrossu_9, 
                style: style_3_5ortale_montegrossu_9,
                popuplayertitle: '3_5 ortale_montegrossu',
                interactive: true,
                title: '<img src="styles/legend/3_5ortale_montegrossu_9.png" /> 3_5 ortale_montegrossu'
            });
var format_3_4lotsaintfrancois_ortale_10 = new ol.format.GeoJSON();
var features_3_4lotsaintfrancois_ortale_10 = format_3_4lotsaintfrancois_ortale_10.readFeatures(json_3_4lotsaintfrancois_ortale_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_4lotsaintfrancois_ortale_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_4lotsaintfrancois_ortale_10.addFeatures(features_3_4lotsaintfrancois_ortale_10);
var lyr_3_4lotsaintfrancois_ortale_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3_4lotsaintfrancois_ortale_10, 
                style: style_3_4lotsaintfrancois_ortale_10,
                popuplayertitle: '3_4 lot. saintfrancois_ortale',
                interactive: true,
                title: '<img src="styles/legend/3_4lotsaintfrancois_ortale_10.png" /> 3_4 lot. saintfrancois_ortale'
            });
var format_3_3lotbevincu_montegrossu_11 = new ol.format.GeoJSON();
var features_3_3lotbevincu_montegrossu_11 = format_3_3lotbevincu_montegrossu_11.readFeatures(json_3_3lotbevincu_montegrossu_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_3lotbevincu_montegrossu_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_3lotbevincu_montegrossu_11.addFeatures(features_3_3lotbevincu_montegrossu_11);
var lyr_3_3lotbevincu_montegrossu_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3_3lotbevincu_montegrossu_11, 
                style: style_3_3lotbevincu_montegrossu_11,
                popuplayertitle: '3_3 lot. bevincu_montegrossu',
                interactive: true,
                title: '<img src="styles/legend/3_3lotbevincu_montegrossu_11.png" /> 3_3 lot. bevincu_montegrossu'
            });
var format_3_2lotulancone_stationdepompageetiquettecopiecopie_12 = new ol.format.GeoJSON();
var features_3_2lotulancone_stationdepompageetiquettecopiecopie_12 = format_3_2lotulancone_stationdepompageetiquettecopiecopie_12.readFeatures(json_3_2lotulancone_stationdepompageetiquettecopiecopie_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_2lotulancone_stationdepompageetiquettecopiecopie_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_2lotulancone_stationdepompageetiquettecopiecopie_12.addFeatures(features_3_2lotulancone_stationdepompageetiquettecopiecopie_12);
var lyr_3_2lotulancone_stationdepompageetiquettecopiecopie_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3_2lotulancone_stationdepompageetiquettecopiecopie_12, 
                style: style_3_2lotulancone_stationdepompageetiquettecopiecopie_12,
                popuplayertitle: '3_2 lot. u lancone_station de pompage etiquette copie copie',
                interactive: true,
                title: '<img src="styles/legend/3_2lotulancone_stationdepompageetiquettecopiecopie_12.png" /> 3_2 lot. u lancone_station de pompage etiquette copie copie'
            });
var format_3_1voiedouce_n4_13 = new ol.format.GeoJSON();
var features_3_1voiedouce_n4_13 = format_3_1voiedouce_n4_13.readFeatures(json_3_1voiedouce_n4_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_1voiedouce_n4_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_1voiedouce_n4_13.addFeatures(features_3_1voiedouce_n4_13);
var lyr_3_1voiedouce_n4_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3_1voiedouce_n4_13, 
                style: style_3_1voiedouce_n4_13,
                popuplayertitle: '3_1 voiedouce_n°4',
                interactive: true,
                title: '<img src="styles/legend/3_1voiedouce_n4_13.png" /> 3_1 voiedouce_n°4'
            });
var format_3_1voiedouce_n4_14 = new ol.format.GeoJSON();
var features_3_1voiedouce_n4_14 = format_3_1voiedouce_n4_14.readFeatures(json_3_1voiedouce_n4_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_1voiedouce_n4_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_1voiedouce_n4_14.addFeatures(features_3_1voiedouce_n4_14);
var lyr_3_1voiedouce_n4_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3_1voiedouce_n4_14, 
                style: style_3_1voiedouce_n4_14,
                popuplayertitle: '3_1 voiedouce_n°4',
                interactive: true,
                title: '<img src="styles/legend/3_1voiedouce_n4_14.png" /> 3_1 voiedouce_n°4'
            });
var format_point_15 = new ol.format.GeoJSON();
var features_point_15 = format_point_15.readFeatures(json_point_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_15.addFeatures(features_point_15);
var lyr_point_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_15, 
                style: style_point_15,
                popuplayertitle: 'point',
                interactive: true,
                title: '<img src="styles/legend/point_15.png" /> point'
            });
var group_autres_sentiers = new ol.layer.Group({
                                layers: [lyr_4_4village_santandrea_2,lyr_4_3village_santandrea_3,lyr_4_2village_santalucia_4,lyr_4_1mairie_village_5,lyr_3_8pisterutali_6,lyr_3_7n4_lotsaintfrancois_7,lyr_3_6ortale_rutali_8,lyr_3_5ortale_montegrossu_9,lyr_3_4lotsaintfrancois_ortale_10,lyr_3_3lotbevincu_montegrossu_11,lyr_3_2lotulancone_stationdepompageetiquettecopiecopie_12,lyr_3_1voiedouce_n4_13,],
                                fold: 'close',
                                title: 'autres_sentiers'});

lyr_OpenStreetMap_0.setVisible(true);lyr_parcellaire_1.setVisible(true);lyr_4_4village_santandrea_2.setVisible(true);lyr_4_3village_santandrea_3.setVisible(true);lyr_4_2village_santalucia_4.setVisible(true);lyr_4_1mairie_village_5.setVisible(true);lyr_3_8pisterutali_6.setVisible(true);lyr_3_7n4_lotsaintfrancois_7.setVisible(true);lyr_3_6ortale_rutali_8.setVisible(true);lyr_3_5ortale_montegrossu_9.setVisible(true);lyr_3_4lotsaintfrancois_ortale_10.setVisible(true);lyr_3_3lotbevincu_montegrossu_11.setVisible(true);lyr_3_2lotulancone_stationdepompageetiquettecopiecopie_12.setVisible(true);lyr_3_1voiedouce_n4_13.setVisible(true);lyr_3_1voiedouce_n4_14.setVisible(true);lyr_point_15.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_parcellaire_1,group_autres_sentiers,lyr_3_1voiedouce_n4_14,lyr_point_15];
lyr_parcellaire_1.set('fieldAliases', {'NUMERO': 'NUMERO', 'FEUILLE': 'FEUILLE', 'SECTION': 'SECTION', 'CODE_DEP': 'CODE_DEP', 'NOM_COM': 'NOM_COM', 'CODE_COM': 'CODE_COM', 'COM_ABS': 'COM_ABS', 'CODE_ARR': 'CODE_ARR', });
lyr_4_4village_santandrea_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_4_3village_santandrea_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_4_2village_santalucia_4.set('fieldAliases', {'id': 'id', 'NOM': 'NOM', });
lyr_4_1mairie_village_5.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_3_8pisterutali_6.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_3_7n4_lotsaintfrancois_7.set('fieldAliases', {'id': 'id', 'NOM': 'NOM', 'TYPE': 'TYPE', });
lyr_3_6ortale_rutali_8.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'EQUIPE': 'EQUIPE', });
lyr_3_5ortale_montegrossu_9.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'EQUIPE': 'EQUIPE', });
lyr_3_4lotsaintfrancois_ortale_10.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'EQUIPE': 'EQUIPE', });
lyr_3_3lotbevincu_montegrossu_11.set('fieldAliases', {'id': 'id', 'NOM': 'NOM', 'TYPE': 'TYPE', 'EQUIPE': 'EQUIPE', });
lyr_3_2lotulancone_stationdepompageetiquettecopiecopie_12.set('fieldAliases', {'name': 'name', 'number': 'number', 'type': 'type', 'EQUIPE': 'EQUIPE', });
lyr_3_1voiedouce_n4_13.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_3_1voiedouce_n4_14.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_point_15.set('fieldAliases', {'id': 'id', 'NOM': 'NOM', 'TYPE': 'TYPE', });
lyr_parcellaire_1.set('fieldImages', {'NUMERO': 'TextEdit', 'FEUILLE': 'Range', 'SECTION': 'TextEdit', 'CODE_DEP': 'TextEdit', 'NOM_COM': 'TextEdit', 'CODE_COM': 'TextEdit', 'COM_ABS': 'TextEdit', 'CODE_ARR': 'TextEdit', });
lyr_4_4village_santandrea_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_4_3village_santandrea_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_4_2village_santalucia_4.set('fieldImages', {'id': 'TextEdit', 'NOM': '', });
lyr_4_1mairie_village_5.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_3_8pisterutali_6.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_3_7n4_lotsaintfrancois_7.set('fieldImages', {'id': 'TextEdit', 'NOM': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_3_6ortale_rutali_8.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'EQUIPE': '', });
lyr_3_5ortale_montegrossu_9.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'EQUIPE': '', });
lyr_3_4lotsaintfrancois_ortale_10.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'EQUIPE': '', });
lyr_3_3lotbevincu_montegrossu_11.set('fieldImages', {'id': 'TextEdit', 'NOM': 'TextEdit', 'TYPE': 'TextEdit', 'EQUIPE': '', });
lyr_3_2lotulancone_stationdepompageetiquettecopiecopie_12.set('fieldImages', {'name': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'EQUIPE': 'TextEdit', });
lyr_3_1voiedouce_n4_13.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_3_1voiedouce_n4_14.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_point_15.set('fieldImages', {'id': 'TextEdit', 'NOM': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_parcellaire_1.set('fieldLabels', {'NUMERO': 'no label', 'FEUILLE': 'no label', 'SECTION': 'no label', 'CODE_DEP': 'no label', 'NOM_COM': 'no label', 'CODE_COM': 'no label', 'COM_ABS': 'no label', 'CODE_ARR': 'no label', });
lyr_4_4village_santandrea_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_4_3village_santandrea_3.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_4_2village_santalucia_4.set('fieldLabels', {'id': 'no label', 'NOM': 'no label', });
lyr_4_1mairie_village_5.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_3_8pisterutali_6.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_3_7n4_lotsaintfrancois_7.set('fieldLabels', {'id': 'no label', 'NOM': 'no label', 'TYPE': 'no label', });
lyr_3_6ortale_rutali_8.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'EQUIPE': 'no label', });
lyr_3_5ortale_montegrossu_9.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'EQUIPE': 'no label', });
lyr_3_4lotsaintfrancois_ortale_10.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'EQUIPE': 'no label', });
lyr_3_3lotbevincu_montegrossu_11.set('fieldLabels', {'id': 'no label', 'NOM': 'no label', 'TYPE': 'no label', 'EQUIPE': 'no label', });
lyr_3_2lotulancone_stationdepompageetiquettecopiecopie_12.set('fieldLabels', {'name': 'no label', 'number': 'no label', 'type': 'no label', 'EQUIPE': 'no label', });
lyr_3_1voiedouce_n4_13.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_3_1voiedouce_n4_14.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_point_15.set('fieldLabels', {'id': 'no label', 'NOM': 'no label', 'TYPE': 'no label', });
lyr_point_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});