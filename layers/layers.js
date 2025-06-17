ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([631104.036610, 5860734.834083, 752724.687289, 5926177.388420]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ComunasBiobio_1 = new ol.format.GeoJSON();
var features_ComunasBiobio_1 = format_ComunasBiobio_1.readFeatures(json_ComunasBiobio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_ComunasBiobio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunasBiobio_1.addFeatures(features_ComunasBiobio_1);
var lyr_ComunasBiobio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunasBiobio_1, 
                style: style_ComunasBiobio_1,
                popuplayertitle: 'ComunasBiobio',
                interactive: true,
                title: '<img src="styles/legend/ComunasBiobio_1.png" /> ComunasBiobio'
            });
var format_Indicadores_barrios_AMC_2 = new ol.format.GeoJSON();
var features_Indicadores_barrios_AMC_2 = format_Indicadores_barrios_AMC_2.readFeatures(json_Indicadores_barrios_AMC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Indicadores_barrios_AMC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indicadores_barrios_AMC_2.addFeatures(features_Indicadores_barrios_AMC_2);
var lyr_Indicadores_barrios_AMC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indicadores_barrios_AMC_2, 
                style: style_Indicadores_barrios_AMC_2,
                popuplayertitle: 'Indicadores_barrios_AMC',
                interactive: true,
                title: '<img src="styles/legend/Indicadores_barrios_AMC_2.png" /> Indicadores_barrios_AMC'
            });
var format_Sitios_Turisticos2_3 = new ol.format.GeoJSON();
var features_Sitios_Turisticos2_3 = format_Sitios_Turisticos2_3.readFeatures(json_Sitios_Turisticos2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Sitios_Turisticos2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitios_Turisticos2_3.addFeatures(features_Sitios_Turisticos2_3);
cluster_Sitios_Turisticos2_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Sitios_Turisticos2_3
});
var lyr_Sitios_Turisticos2_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Sitios_Turisticos2_3, 
                style: style_Sitios_Turisticos2_3,
                popuplayertitle: 'Sitios_Turisticos2',
                interactive: true,
    title: 'Sitios_Turisticos2<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_0.png" /> Cerro Amarillo<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_1.png" /> El Morro<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_2.png" /> Laguna Lo Mendez<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_3.png" /> Museo Lota<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_4.png" /> Parque Aurora de Chile<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_5.png" /> Parque Las Tres Pascualas<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_6.png" /> Parque Lo Custodio<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_7.png" /> Parque San Pedro del Valle<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_8.png" /> Parque Villa Cap<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_9.png" /> Parque-Mirador Los Pinos<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_10.png" /> Pinacoteca<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_11.png" /> Plaza Arturo Prat - Tomé<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_12.png" /> Plaza Condell<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_13.png" /> Plaza de armas Penco<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_14.png" /> Plaza de armas Talcahuano<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_15.png" /> Plaza de Bellavista<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_16.png" /> Plaza de Lirquen<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_17.png" /> Plaza Perú<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_18.png" /> Teatro Enrique Molina<br />\
    <img src="styles/legend/Sitios_Turisticos2_3_19.png" /> Zoo Concepción<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_ComunasBiobio_1.setVisible(true);lyr_Indicadores_barrios_AMC_2.setVisible(true);lyr_Sitios_Turisticos2_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ComunasBiobio_1,lyr_Indicadores_barrios_AMC_2,lyr_Sitios_Turisticos2_3];
lyr_ComunasBiobio_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_Indicadores_barrios_AMC_2.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_Sitios_Turisticos2_3.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Comuna': 'Comuna', 'Habitantes': 'Habitantes', 'Inaguracio': 'Inaguracio', 'Video': 'Video', 'Barrio': 'Barrio', });
lyr_ComunasBiobio_1.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_Indicadores_barrios_AMC_2.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_Sitios_Turisticos2_3.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Comuna': 'TextEdit', 'Habitantes': 'TextEdit', 'Inaguracio': 'TextEdit', 'Video': 'TextEdit', 'Barrio': 'TextEdit', });
lyr_ComunasBiobio_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_Indicadores_barrios_AMC_2.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_Sitios_Turisticos2_3.set('fieldLabels', {'id': 'no label', 'Nombre': 'inline label - always visible', 'Comuna': 'inline label - always visible', 'Habitantes': 'inline label - always visible', 'Inaguracio': 'inline label - always visible', 'Video': 'inline label - always visible', 'Barrio': 'inline label - always visible', });
lyr_Sitios_Turisticos2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});