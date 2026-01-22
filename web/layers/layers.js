var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_acceso_vehicular_1 = new ol.format.GeoJSON();
var features_acceso_vehicular_1 = format_acceso_vehicular_1.readFeatures(json_acceso_vehicular_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_acceso_vehicular_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_acceso_vehicular_1.addFeatures(features_acceso_vehicular_1);
var lyr_acceso_vehicular_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_acceso_vehicular_1, 
                style: style_acceso_vehicular_1,
                popuplayertitle: 'acceso_vehicular',
                interactive: true,
                title: '<img src="styles/legend/acceso_vehicular_1.png" /> acceso_vehicular'
            });
var format_gas_points_2 = new ol.format.GeoJSON();
var features_gas_points_2 = format_gas_points_2.readFeatures(json_gas_points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gas_points_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gas_points_2.addFeatures(features_gas_points_2);
var lyr_gas_points_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gas_points_2, 
                style: style_gas_points_2,
                popuplayertitle: 'gas_points',
                interactive: true,
                title: '<img src="styles/legend/gas_points_2.png" /> gas_points'
            });
var format_gas_accesorios_3 = new ol.format.GeoJSON();
var features_gas_accesorios_3 = format_gas_accesorios_3.readFeatures(json_gas_accesorios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gas_accesorios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gas_accesorios_3.addFeatures(features_gas_accesorios_3);
var lyr_gas_accesorios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gas_accesorios_3, 
                style: style_gas_accesorios_3,
                popuplayertitle: 'gas_accesorios',
                interactive: true,
                title: '<img src="styles/legend/gas_accesorios_3.png" /> gas_accesorios'
            });
var format_electricidad_4 = new ol.format.GeoJSON();
var features_electricidad_4 = format_electricidad_4.readFeatures(json_electricidad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_electricidad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_electricidad_4.addFeatures(features_electricidad_4);
var lyr_electricidad_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_electricidad_4, 
                style: style_electricidad_4,
                popuplayertitle: 'electricidad',
                interactive: true,
    title: 'electricidad<br />\
    <img src="styles/legend/electricidad_4_0.png" /> monofasico<br />\
    <img src="styles/legend/electricidad_4_1.png" /> trifasico<br />\
    <img src="styles/legend/electricidad_4_2.png" /> <br />' });
var format_tableros_elec_5 = new ol.format.GeoJSON();
var features_tableros_elec_5 = format_tableros_elec_5.readFeatures(json_tableros_elec_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tableros_elec_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tableros_elec_5.addFeatures(features_tableros_elec_5);
var lyr_tableros_elec_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tableros_elec_5, 
                style: style_tableros_elec_5,
                popuplayertitle: 'tableros_elec',
                interactive: true,
                title: '<img src="styles/legend/tableros_elec_5.png" /> tableros_elec'
            });
var format_agua_potable_6 = new ol.format.GeoJSON();
var features_agua_potable_6 = format_agua_potable_6.readFeatures(json_agua_potable_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agua_potable_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agua_potable_6.addFeatures(features_agua_potable_6);
var lyr_agua_potable_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agua_potable_6, 
                style: style_agua_potable_6,
                popuplayertitle: 'agua_potable',
                interactive: true,
    title: 'agua_potable<br />\
    <img src="styles/legend/agua_potable_6_0.png" /> 1<br />\
    <img src="styles/legend/agua_potable_6_1.png" /> 2<br />\
    <img src="styles/legend/agua_potable_6_2.png" /> 3<br />\
    <img src="styles/legend/agua_potable_6_3.png" /> 4<br />\
    <img src="styles/legend/agua_potable_6_4.png" /> 5<br />\
    <img src="styles/legend/agua_potable_6_5.png" /> 6<br />\
    <img src="styles/legend/agua_potable_6_6.png" /> <br />' });
var format_agua_riego_7 = new ol.format.GeoJSON();
var features_agua_riego_7 = format_agua_riego_7.readFeatures(json_agua_riego_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agua_riego_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agua_riego_7.addFeatures(features_agua_riego_7);
var lyr_agua_riego_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agua_riego_7, 
                style: style_agua_riego_7,
                popuplayertitle: 'agua_riego',
                interactive: true,
    title: 'agua_riego<br />\
    <img src="styles/legend/agua_riego_7_0.png" /> 1<br />\
    <img src="styles/legend/agua_riego_7_1.png" /> 4<br />\
    <img src="styles/legend/agua_riego_7_2.png" /> 5<br />\
    <img src="styles/legend/agua_riego_7_3.png" /> <br />' });
var format_agua_accesorios_8 = new ol.format.GeoJSON();
var features_agua_accesorios_8 = format_agua_accesorios_8.readFeatures(json_agua_accesorios_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agua_accesorios_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agua_accesorios_8.addFeatures(features_agua_accesorios_8);
var lyr_agua_accesorios_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agua_accesorios_8, 
                style: style_agua_accesorios_8,
                popuplayertitle: 'agua_accesorios',
                interactive: true,
    title: 'agua_accesorios<br />\
    <img src="styles/legend/agua_accesorios_8_0.png" /> bomba<br />\
    <img src="styles/legend/agua_accesorios_8_1.png" /> llave paso<br />\
    <img src="styles/legend/agua_accesorios_8_2.png" /> medidor<br />\
    <img src="styles/legend/agua_accesorios_8_3.png" /> t distribu<br />\
    <img src="styles/legend/agua_accesorios_8_4.png" /> valv-ret<br />\
    <img src="styles/legend/agua_accesorios_8_5.png" /> <br />' });
var format_agua_reservorios_9 = new ol.format.GeoJSON();
var features_agua_reservorios_9 = format_agua_reservorios_9.readFeatures(json_agua_reservorios_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agua_reservorios_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agua_reservorios_9.addFeatures(features_agua_reservorios_9);
var lyr_agua_reservorios_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agua_reservorios_9, 
                style: style_agua_reservorios_9,
                popuplayertitle: 'agua_reservorios',
                interactive: true,
    title: 'agua_reservorios<br />\
    <img src="styles/legend/agua_reservorios_9_0.png" /> 500 - 1000<br />\
    <img src="styles/legend/agua_reservorios_9_1.png" /> 1000 - 1400<br />\
    <img src="styles/legend/agua_reservorios_9_2.png" /> 1400 - 4600<br />\
    <img src="styles/legend/agua_reservorios_9_3.png" /> 4600 - 53000<br />\
    <img src="styles/legend/agua_reservorios_9_4.png" /> 53000 - 100000<br />' });
var format_limites_chacra_EH_10 = new ol.format.GeoJSON();
var features_limites_chacra_EH_10 = format_limites_chacra_EH_10.readFeatures(json_limites_chacra_EH_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limites_chacra_EH_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limites_chacra_EH_10.addFeatures(features_limites_chacra_EH_10);
var lyr_limites_chacra_EH_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limites_chacra_EH_10, 
                style: style_limites_chacra_EH_10,
                popuplayertitle: 'limites_chacra_EH',
                interactive: false,
                title: '<img src="styles/legend/limites_chacra_EH_10.png" /> limites_chacra_EH'
            });
var format_construcciones_11 = new ol.format.GeoJSON();
var features_construcciones_11 = format_construcciones_11.readFeatures(json_construcciones_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_construcciones_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_construcciones_11.addFeatures(features_construcciones_11);
var lyr_construcciones_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_construcciones_11, 
                style: style_construcciones_11,
                popuplayertitle: 'construcciones',
                interactive: true,
                title: '<img src="styles/legend/construcciones_11.png" /> construcciones'
            });
var group_agua = new ol.layer.Group({
                                layers: [lyr_agua_potable_6,lyr_agua_riego_7,lyr_agua_accesorios_8,lyr_agua_reservorios_9,],
                                fold: 'open',
                                title: 'agua'});
var group_electricidad = new ol.layer.Group({
                                layers: [lyr_electricidad_4,lyr_tableros_elec_5,],
                                fold: 'open',
                                title: 'electricidad'});
var group_gas = new ol.layer.Group({
                                layers: [lyr_gas_points_2,lyr_gas_accesorios_3,],
                                fold: 'open',
                                title: 'gas'});
var group_accesovehicular = new ol.layer.Group({
                                layers: [lyr_acceso_vehicular_1,],
                                fold: 'open',
                                title: 'acceso vehicular'});

lyr_GoogleSatellite_0.setVisible(true);lyr_acceso_vehicular_1.setVisible(true);lyr_gas_points_2.setVisible(true);lyr_gas_accesorios_3.setVisible(true);lyr_electricidad_4.setVisible(true);lyr_tableros_elec_5.setVisible(true);lyr_agua_potable_6.setVisible(true);lyr_agua_riego_7.setVisible(true);lyr_agua_accesorios_8.setVisible(true);lyr_agua_reservorios_9.setVisible(true);lyr_limites_chacra_EH_10.setVisible(true);lyr_construcciones_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_accesovehicular,group_gas,group_electricidad,group_agua,lyr_limites_chacra_EH_10,lyr_construcciones_11];
lyr_acceso_vehicular_1.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', });
lyr_gas_points_2.set('fieldAliases', {'id': 'id', 'identif': 'identif', });
lyr_gas_accesorios_3.set('fieldAliases', {'id': 'id', 'identif': 'identif', });
lyr_electricidad_4.set('fieldAliases', {'id': 'id', 'tipo': 'tipo', 'identifica': 'identifica', 'seccion': 'seccion', 'conductore': 'conductore', });
lyr_tableros_elec_5.set('fieldAliases', {'id': 'id', 'ident': 'ident', 'tipo': 'tipo', 'termica am': 'termica am', 'diferencia': 'diferencia', 'otro': 'otro', });
lyr_agua_potable_6.set('fieldAliases', {'id': 'id', 'material': 'material', 'diametro': 'diametro', 'tipo': 'tipo', 'id_red': 'id_red', 'identifica': 'identifica', });
lyr_agua_riego_7.set('fieldAliases', {'id': 'id', 'red': 'red', 'diametro': 'diametro', 'material': 'material', 'idenfic': 'idenfic', });
lyr_agua_accesorios_8.set('fieldAliases', {'id': 'id', 'id_red': 'id_red', 'tipo': 'tipo', 'tipo_red': 'tipo_red', });
lyr_agua_reservorios_9.set('fieldAliases', {'id': 'id', 'id_red': 'id_red', 'capacidad': 'capacidad', 'identifica': 'identifica', });
lyr_limites_chacra_EH_10.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_construcciones_11.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'suoerficie': 'suoerficie', });
lyr_acceso_vehicular_1.set('fieldImages', {'id': 'Range', 'identifica': 'TextEdit', });
lyr_gas_points_2.set('fieldImages', {'id': '', 'identif': '', });
lyr_gas_accesorios_3.set('fieldImages', {'id': '', 'identif': '', });
lyr_electricidad_4.set('fieldImages', {'id': 'Range', 'tipo': 'Range', 'identifica': 'TextEdit', 'seccion': 'Range', 'conductore': 'Range', });
lyr_tableros_elec_5.set('fieldImages', {'id': 'Range', 'ident': 'TextEdit', 'tipo': 'TextEdit', 'termica am': 'Range', 'diferencia': 'Range', 'otro': 'TextEdit', });
lyr_agua_potable_6.set('fieldImages', {'id': 'Range', 'material': 'TextEdit', 'diametro': 'Range', 'tipo': 'TextEdit', 'id_red': 'Range', 'identifica': 'TextEdit', });
lyr_agua_riego_7.set('fieldImages', {'id': 'Range', 'red': 'TextEdit', 'diametro': 'Range', 'material': 'TextEdit', 'idenfic': 'TextEdit', });
lyr_agua_accesorios_8.set('fieldImages', {'id': 'Range', 'id_red': 'TextEdit', 'tipo': 'TextEdit', 'tipo_red': 'TextEdit', });
lyr_agua_reservorios_9.set('fieldImages', {'id': 'Range', 'id_red': 'TextEdit', 'capacidad': 'Range', 'identifica': 'TextEdit', });
lyr_limites_chacra_EH_10.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', });
lyr_construcciones_11.set('fieldImages', {'id': '', 'nombre': '', 'suoerficie': '', });
lyr_acceso_vehicular_1.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', });
lyr_gas_points_2.set('fieldLabels', {'id': 'no label', 'identif': 'no label', });
lyr_gas_accesorios_3.set('fieldLabels', {'id': 'no label', 'identif': 'no label', });
lyr_electricidad_4.set('fieldLabels', {'id': 'no label', 'tipo': 'no label', 'identifica': 'no label', 'seccion': 'no label', 'conductore': 'no label', });
lyr_tableros_elec_5.set('fieldLabels', {'id': 'no label', 'ident': 'no label', 'tipo': 'no label', 'termica am': 'no label', 'diferencia': 'no label', 'otro': 'no label', });
lyr_agua_potable_6.set('fieldLabels', {'id': 'no label', 'material': 'no label', 'diametro': 'no label', 'tipo': 'no label', 'id_red': 'no label', 'identifica': 'no label', });
lyr_agua_riego_7.set('fieldLabels', {'id': 'no label', 'red': 'no label', 'diametro': 'no label', 'material': 'no label', 'idenfic': 'no label', });
lyr_agua_accesorios_8.set('fieldLabels', {'id': 'no label', 'id_red': 'no label', 'tipo': 'no label', 'tipo_red': 'no label', });
lyr_agua_reservorios_9.set('fieldLabels', {'id': 'no label', 'id_red': 'header label - visible with data', 'capacidad': 'no label', 'identifica': 'no label', });
lyr_limites_chacra_EH_10.set('fieldLabels', {'id': 'no label', 'area': 'no label', });
lyr_construcciones_11.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'suoerficie': 'no label', });
lyr_construcciones_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});