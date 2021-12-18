var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_firSamLine_2 = new ol.format.GeoJSON();
var features_firSamLine_2 = format_firSamLine_2.readFeatures(json_firSamLine_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_firSamLine_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_firSamLine_2.addFeatures(features_firSamLine_2);
var lyr_firSamLine_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_firSamLine_2, 
                style: style_firSamLine_2,
                interactive: true,
                title: '<img src="styles/legend/firSamLine_2.png" /> firSamLine'
            });
var format_linea_de_limite_070111linea_de_limite_070111shp_3 = new ol.format.GeoJSON();
var features_linea_de_limite_070111linea_de_limite_070111shp_3 = format_linea_de_limite_070111linea_de_limite_070111shp_3.readFeatures(json_linea_de_limite_070111linea_de_limite_070111shp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linea_de_limite_070111linea_de_limite_070111shp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linea_de_limite_070111linea_de_limite_070111shp_3.addFeatures(features_linea_de_limite_070111linea_de_limite_070111shp_3);
var lyr_linea_de_limite_070111linea_de_limite_070111shp_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_linea_de_limite_070111linea_de_limite_070111shp_3, 
                style: style_linea_de_limite_070111linea_de_limite_070111shp_3,
                interactive: true,
                title: '<img src="styles/legend/linea_de_limite_070111linea_de_limite_070111shp_3.png" /> linea_de_limite_070111 — linea_de_limite_070111.shp'
            });
var format_linea_de_limite_FA004linea_de_limite_FA004shp_4 = new ol.format.GeoJSON();
var features_linea_de_limite_FA004linea_de_limite_FA004shp_4 = format_linea_de_limite_FA004linea_de_limite_FA004shp_4.readFeatures(json_linea_de_limite_FA004linea_de_limite_FA004shp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linea_de_limite_FA004linea_de_limite_FA004shp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linea_de_limite_FA004linea_de_limite_FA004shp_4.addFeatures(features_linea_de_limite_FA004linea_de_limite_FA004shp_4);
var lyr_linea_de_limite_FA004linea_de_limite_FA004shp_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_linea_de_limite_FA004linea_de_limite_FA004shp_4, 
                style: style_linea_de_limite_FA004linea_de_limite_FA004shp_4,
                interactive: true,
                title: '<img src="styles/legend/linea_de_limite_FA004linea_de_limite_FA004shp_4.png" /> linea_de_limite_FA004 — linea_de_limite_FA004.shp'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_firSamLine_2.setVisible(true);lyr_linea_de_limite_070111linea_de_limite_070111shp_3.setVisible(true);lyr_linea_de_limite_FA004linea_de_limite_FA004shp_4.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_GoogleHybrid_1,lyr_firSamLine_2,lyr_linea_de_limite_070111linea_de_limite_070111shp_3,lyr_linea_de_limite_FA004linea_de_limite_FA004shp_4];
lyr_firSamLine_2.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_linea_de_limite_070111linea_de_limite_070111shp_3.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'nam': 'nam', 'gna': 'gna', 'vlj': 'vlj', 'fdc': 'fdc', 'sag': 'sag', });
lyr_linea_de_limite_FA004linea_de_limite_FA004shp_4.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'nam': 'nam', 'gna': 'gna', 'fdc': 'fdc', 'sag': 'sag', });
lyr_firSamLine_2.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', });
lyr_linea_de_limite_070111linea_de_limite_070111shp_3.set('fieldImages', {'gid': 'Range', 'entidad': 'Range', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'nam': 'TextEdit', 'gna': 'TextEdit', 'vlj': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_linea_de_limite_FA004linea_de_limite_FA004shp_4.set('fieldImages', {'gid': 'Range', 'entidad': 'Range', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'nam': 'TextEdit', 'gna': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_firSamLine_2.set('fieldLabels', {'name': 'no label', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'header label', });
lyr_linea_de_limite_070111linea_de_limite_070111shp_3.set('fieldLabels', {'gid': 'no label', 'entidad': 'no label', 'objeto': 'no label', 'fna': 'no label', 'nam': 'no label', 'gna': 'no label', 'vlj': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_linea_de_limite_FA004linea_de_limite_FA004shp_4.set('fieldLabels', {'gid': 'no label', 'entidad': 'no label', 'objeto': 'no label', 'fna': 'no label', 'nam': 'no label', 'gna': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_linea_de_limite_FA004linea_de_limite_FA004shp_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});