var wms_layers = [];

var format_Landmass_0 = new ol.format.GeoJSON();
var features_Landmass_0 = format_Landmass_0.readFeatures(json_Landmass_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landmass_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landmass_0.addFeatures(features_Landmass_0);
var lyr_Landmass_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landmass_0, 
                style: style_Landmass_0,
                popuplayertitle: 'Landmass',
                interactive: false,
                title: '<img src="styles/legend/Landmass_0.png" /> Landmass'
            });
var format_Grid_1 = new ol.format.GeoJSON();
var features_Grid_1 = format_Grid_1.readFeatures(json_Grid_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grid_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grid_1.addFeatures(features_Grid_1);
var lyr_Grid_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grid_1, 
                style: style_Grid_1,
                popuplayertitle: 'Grid',
                interactive: false,
                title: '<img src="styles/legend/Grid_1.png" /> Grid'
            });
var format_Roadmaps_2 = new ol.format.GeoJSON();
var features_Roadmaps_2 = format_Roadmaps_2.readFeatures(json_Roadmaps_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadmaps_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadmaps_2.addFeatures(features_Roadmaps_2);
var lyr_Roadmaps_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadmaps_2, 
                style: style_Roadmaps_2,
                popuplayertitle: 'Roadmaps',
                interactive: true,
    title: 'Roadmaps<br />\
    <img src="styles/legend/Roadmaps_2_0.png" /> <br />\
    <img src="styles/legend/Roadmaps_2_1.png" /> <br />\
    <img src="styles/legend/Roadmaps_2_2.png" /> <br />\
    <img src="styles/legend/Roadmaps_2_3.png" /> <br />' });
var format_Claims_3 = new ol.format.GeoJSON();
var features_Claims_3 = format_Claims_3.readFeatures(json_Claims_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Claims_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Claims_3.addFeatures(features_Claims_3);
var lyr_Claims_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Claims_3, 
                style: style_Claims_3,
                popuplayertitle: 'Claims',
                interactive: true,
    title: 'Claims<br />\
    <img src="styles/legend/Claims_3_0.png" /> Claimed<br />\
    <img src="styles/legend/Claims_3_1.png" /> Design<br />\
    <img src="styles/legend/Claims_3_2.png" /> Merged<br />\
    <img src="styles/legend/Claims_3_3.png" /> Reviewing<br />\
    <img src="styles/legend/Claims_3_4.png" /> Unclaimed<br />\
    <img src="styles/legend/Claims_3_5.png" /> <br />' });
var format_Dungeons2dungeons_4 = new ol.format.GeoJSON();
var features_Dungeons2dungeons_4 = format_Dungeons2dungeons_4.readFeatures(json_Dungeons2dungeons_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dungeons2dungeons_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dungeons2dungeons_4.addFeatures(features_Dungeons2dungeons_4);
var lyr_Dungeons2dungeons_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dungeons2dungeons_4, 
                style: style_Dungeons2dungeons_4,
                popuplayertitle: 'Dungeons2 — dungeons',
                interactive: true,
                title: '<img src="styles/legend/Dungeons2dungeons_4.png" /> Dungeons2 — dungeons'
            });
var format_Settlements2settlements_5 = new ol.format.GeoJSON();
var features_Settlements2settlements_5 = format_Settlements2settlements_5.readFeatures(json_Settlements2settlements_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Settlements2settlements_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Settlements2settlements_5.addFeatures(features_Settlements2settlements_5);
var lyr_Settlements2settlements_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Settlements2settlements_5, 
                style: style_Settlements2settlements_5,
                popuplayertitle: 'Settlements2 — settlements',
                interactive: true,
                title: '<img src="styles/legend/Settlements2settlements_5.png" /> Settlements2 — settlements'
            });
var format_Regions_6 = new ol.format.GeoJSON();
var features_Regions_6 = format_Regions_6.readFeatures(json_Regions_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regions_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regions_6.addFeatures(features_Regions_6);
var lyr_Regions_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regions_6, 
                style: style_Regions_6,
                popuplayertitle: 'Regions',
                interactive: true,
    title: 'Regions<br />\
    <img src="styles/legend/Regions_6_0.png" /> GoldMoor<br />\
    <img src="styles/legend/Regions_6_1.png" /> <br />\
    <img src="styles/legend/Regions_6_2.png" /> Brennan Bluffs<br />\
    <img src="styles/legend/Regions_6_3.png" /> Tava\'s Cradle<br />\
    <img src="styles/legend/Regions_6_4.png" /> Helkori Wastes<br />\
    <img src="styles/legend/Regions_6_5.png" /> Riddle-Lands<br />\
    <img src="styles/legend/Regions_6_6.png" /> Strident Coast<br />\
    <img src="styles/legend/Regions_6_7.png" /> Dak\'Fron<br />\
    <img src="styles/legend/Regions_6_8.png" /> Tark Basin<br />\
    <img src="styles/legend/Regions_6_9.png" /> The Bend\'r-Mahk<br />\
    <img src="styles/legend/Regions_6_10.png" /> Alik\'r Dunes\'<br />\
    <img src="styles/legend/Regions_6_11.png" /> Bantha<br />\
    <img src="styles/legend/Regions_6_12.png" /> Colovian Highlands<br />\
    <img src="styles/legend/Regions_6_13.png" /> Devil\'s Den<br />\
    <img src="styles/legend/Regions_6_14.png" /> Dragontail Mountains<br />\
    <img src="styles/legend/Regions_6_15.png" /> Hew\'s Bane<br />\
    <img src="styles/legend/Regions_6_16.png" /> Kvetchi Pass<br />\
    <img src="styles/legend/Regions_6_17.png" /> Starfall<br />\
    <img src="styles/legend/Regions_6_18.png" /> Barrowlands<br />\
    <img src="styles/legend/Regions_6_19.png" /> Dasek Marsh<br />\
    <img src="styles/legend/Regions_6_20.png" /> Massiqueran Forest<br />\
    <img src="styles/legend/Regions_6_21.png" /> Mor\'s Ambit<br />\
    <img src="styles/legend/Regions_6_22.png" /> Ruma Floodlands<br />\
    <img src="styles/legend/Regions_6_23.png" /> West Weald<br />\
    <img src="styles/legend/Regions_6_24.png" /> Demergatur<br />\
    <img src="styles/legend/Regions_6_25.png" /> Heatlands<br />\
    <img src="styles/legend/Regions_6_26.png" /> Jerrall Mountains<br />\
    <img src="styles/legend/Regions_6_27.png" /> Bjoulsae Basin<br />\
    <img src="styles/legend/Regions_6_28.png" /> Dragonfields<br />\
    <img src="styles/legend/Regions_6_29.png" /> Ostheldir<br />\
    <img src="styles/legend/Regions_6_30.png" /> Abecean Sea<br />\
    <img src="styles/legend/Regions_6_31.png" /> Druadach Highlands<br />\
    <img src="styles/legend/Regions_6_32.png" /> Ogre\'s Tooth Mountains<br />\
    <img src="styles/legend/Regions_6_33.png" /> Raha\'s Landing<br />\
    <img src="styles/legend/Regions_6_34.png" /> Titan\'s Death<br />\
    <img src="styles/legend/Regions_6_35.png" /> Creag Coast<br />\
    <img src="styles/legend/Regions_6_36.png" /> Malekna Wood<br />\
    <img src="styles/legend/Regions_6_37.png" /> Wrothgarian Mountains<br />\
    <img src="styles/legend/Regions_6_38.png" /> Dellese Isles<br />\
    <img src="styles/legend/Regions_6_39.png" /> Glenumbra Moors<br />\
    <img src="styles/legend/Regions_6_40.png" /> Ilessan Hills<br />\
    <img src="styles/legend/Regions_6_41.png" /> Lesser Bretony<br />\
    <img src="styles/legend/Regions_6_42.png" /> Ravennia<br />\
    <img src="styles/legend/Regions_6_43.png" /> Skeffington Wood<br />\
    <img src="styles/legend/Regions_6_44.png" /> Balothian Bay<br />\
    <img src="styles/legend/Regions_6_45.png" /> Eltheric Ocean<br />\
    <img src="styles/legend/Regions_6_46.png" /> Gedalan<br />\
    <img src="styles/legend/Regions_6_47.png" /> Iliac Bay<br />\
    <img src="styles/legend/Regions_6_48.png" /> Kurallian Mountains<br />\
    <img src="styles/legend/Regions_6_49.png" /> Norcambria<br />\
    <img src="styles/legend/Regions_6_50.png" /> Caspar Isle<br />\
    <img src="styles/legend/Regions_6_51.png" /> Chain Isles<br />\
    <img src="styles/legend/Regions_6_52.png" /> Herne Isle<br />\
    <img src="styles/legend/Regions_6_53.png" /> Broken Cape<br />\
    <img src="styles/legend/Regions_6_54.png" /> Drajkmyr Marsh<br />\
    <img src="styles/legend/Regions_6_55.png" /> Eastmarch<br />\
    <img src="styles/legend/Regions_6_56.png" /> Gjerde Hills<br />\
    <img src="styles/legend/Regions_6_57.png" /> Gorvigh Ridge<br />\
    <img src="styles/legend/Regions_6_58.png" /> Grey Plains<br />\
    <img src="styles/legend/Regions_6_59.png" /> Hirsing Mountains<br />\
    <img src="styles/legend/Regions_6_60.png" /> Ivory Steppe<br />\
    <img src="styles/legend/Regions_6_61.png" /> Kilkreath Mountains<br />\
    <img src="styles/legend/Regions_6_62.png" /> Kreathi Dale<br />\
    <img src="styles/legend/Regions_6_63.png" /> Lorchwuir Heath<br />\
    <img src="styles/legend/Regions_6_64.png" /> Midkarth<br />\
    <img src="styles/legend/Regions_6_65.png" /> Njorvela<br />\
    <img src="styles/legend/Regions_6_66.png" /> Northshore<br />\
    <img src="styles/legend/Regions_6_67.png" /> Reaver\'s Shore<br />\
    <img src="styles/legend/Regions_6_68.png" /> Rift Valley<br />\
    <img src="styles/legend/Regions_6_69.png" /> Sea of Ghosts<br />\
    <img src="styles/legend/Regions_6_70.png" /> Skaldring Mountains<br />\
    <img src="styles/legend/Regions_6_71.png" /> Solitude Forest<br />\
    <img src="styles/legend/Regions_6_72.png" /> Sundered Hills<br />\
    <img src="styles/legend/Regions_6_73.png" /> Throat of the World<br />\
    <img src="styles/legend/Regions_6_74.png" /> Troll\'s Teeth<br />\
    <img src="styles/legend/Regions_6_75.png" /> Vaalstag Highlands<br />\
    <img src="styles/legend/Regions_6_76.png" /> Vorndgad Forest<br />\
    <img src="styles/legend/Regions_6_77.png" /> Wuurthal Plains<br />\
    <img src="styles/legend/Regions_6_78.png" /> Ysheim<br />\
    <img src="styles/legend/Regions_6_79.png" /> Cape Black<br />\
    <img src="styles/legend/Regions_6_80.png" /> Hrimbald Plateau<br />\
    <img src="styles/legend/Regions_6_81.png" /> Thorig Glacier<br />\
    <img src="styles/legend/Regions_6_82.png" /> Velothi Mountains<br />\
    <img src="styles/legend/Regions_6_83.png" /> Vromburh Waste<br />\
    <img src="styles/legend/Regions_6_84.png" /> Whaler\'s Coast<br />\
    <img src="styles/legend/Regions_6_85.png" /> Arenth-Arla<br />\
    <img src="styles/legend/Regions_6_86.png" /> Barrens<br />\
    <img src="styles/legend/Regions_6_87.png" /> Etiolatum<br />\
    <img src="styles/legend/Regions_6_88.png" /> Kavas Rim<br />\
    <img src="styles/legend/Regions_6_89.png" /> Molaquin Ren<br />\
    <img src="styles/legend/Regions_6_90.png" /> Niben Destra<br />\
    <img src="styles/legend/Regions_6_91.png" /> Niben Sester<br />\
    <img src="styles/legend/Regions_6_92.png" /> Serican Jungle<br />\
    <img src="styles/legend/Regions_6_93.png" /> The Rim<br />\
    <img src="styles/legend/Regions_6_94.png" /> Titan\'s Birth<br />\
    <img src="styles/legend/Regions_6_95.png" /> Valley of Altars<br />\
    <img src="styles/legend/Regions_6_96.png" /> Xarxen Mora<br />\
    <img src="styles/legend/Regions_6_97.png" /> Alkosh-Kuza<br />\
    <img src="styles/legend/Regions_6_98.png" /> Arata Ceyglynn<br />\
    <img src="styles/legend/Regions_6_99.png" /> Azurah\'s Bounty<br />\
    <img src="styles/legend/Regions_6_100.png" /> Blue Divide<br />\
    <img src="styles/legend/Regions_6_101.png" /> Cerulean Coast<br />\
    <img src="styles/legend/Regions_6_102.png" /> Dragon\'s Teeth<br />\
    <img src="styles/legend/Regions_6_103.png" /> Elden Grove<br />\
    <img src="styles/legend/Regions_6_104.png" /> Fyresent Coast<br />\
    <img src="styles/legend/Regions_6_105.png" /> Haset Hyarnai<br />\
    <img src="styles/legend/Regions_6_106.png" /> Iyamarr Coast<br />\
    <img src="styles/legend/Regions_6_107.png" /> Khenarthi\'s Roost<br />\
    <img src="styles/legend/Regions_6_108.png" /> Khras\'jur Canyon<br />\
    <img src="styles/legend/Regions_6_109.png" /> Lypan Floodlands<br />\
    <img src="styles/legend/Regions_6_110.png" /> Meditea<br />\
    <img src="styles/legend/Regions_6_111.png" /> Ne Quin-Al Desert<br />\
    <img src="styles/legend/Regions_6_112.png" /> Quin-Rawl<br />\
    <img src="styles/legend/Regions_6_113.png" /> Quinonda<br />\
    <img src="styles/legend/Regions_6_114.png" /> Riaskyl Morth<br />\
    <img src="styles/legend/Regions_6_115.png" /> Saimisil Steppes<br />\
    <img src="styles/legend/Regions_6_116.png" /> Sea of Mistis<br />\
    <img src="styles/legend/Regions_6_117.png" /> Shijoh Scrublands<br />\
    <img src="styles/legend/Regions_6_118.png" /> Silvenar Grove<br />\
    <img src="styles/legend/Regions_6_119.png" /> Tenmar Forest<br />\
    <img src="styles/legend/Regions_6_120.png" /> Topal Bay<br />\
    <img src="styles/legend/Regions_6_121.png" /> Topal Shores<br />\
    <img src="styles/legend/Regions_6_122.png" /> Ulunedai<br />\
    <img src="styles/legend/Regions_6_123.png" /> Vauriaval Isles<br />\
    <img src="styles/legend/Regions_6_124.png" /> Xyllo Basin<br />\
    <img src="styles/legend/Regions_6_125.png" /> Aanthirin<br />\
    <img src="styles/legend/Regions_6_126.png" /> Armun Ashlands<br />\
    <img src="styles/legend/Regions_6_127.png" /> Boethiiah\'s Spine<br />\
    <img src="styles/legend/Regions_6_128.png" /> Clambering Moor<br />\
    <img src="styles/legend/Regions_6_129.png" /> Coronati Basin`<br />\
    <img src="styles/legend/Regions_6_130.png" /> Dagon Urul<br />\
    <img src="styles/legend/Regions_6_131.png" /> Deshaan Plains<br />\
    <img src="styles/legend/Regions_6_132.png" /> Great Valley<br />\
    <img src="styles/legend/Regions_6_133.png" /> Grey Meadows<br />\
    <img src="styles/legend/Regions_6_134.png" /> Ilumat Highlands<br />\
    <img src="styles/legend/Regions_6_135.png" /> Julan-Shar<br />\
    <img src="styles/legend/Regions_6_136.png" /> Kartur Dale<br />\
    <img src="styles/legend/Regions_6_137.png" /> Mephalan Vales<br />\
    <img src="styles/legend/Regions_6_138.png" /> Molag Ruhn<br />\
    <img src="styles/legend/Regions_6_139.png" /> Mudflats<br />\
    <img src="styles/legend/Regions_6_140.png" /> Nedothril<br />\
    <img src="styles/legend/Regions_6_141.png" /> Orethan<br />\
    <img src="styles/legend/Regions_6_142.png" /> Othreleth Woods<br />\
    <img src="styles/legend/Regions_6_143.png" /> Padomaic Ocean<br />\
    <img src="styles/legend/Regions_6_144.png" /> Roth Roryn<br />\
    <img src="styles/legend/Regions_6_145.png" /> Sacred Lands<br />\
    <img src="styles/legend/Regions_6_146.png" /> Scath Anud<br />\
    <img src="styles/legend/Regions_6_147.png" /> Shipal Shin<br />\
    <img src="styles/legend/Regions_6_148.png" /> Stirk Isle<br />\
    <img src="styles/legend/Regions_6_149.png" /> Sunad Mora<br />\
    <img src="styles/legend/Regions_6_150.png" /> Sundered Scar<br />\
    <img src="styles/legend/Regions_6_151.png" /> Telvanni Isles<br />\
    <img src="styles/legend/Regions_6_152.png" /> Urush-Nal<br />\
    <img src="styles/legend/Regions_6_153.png" /> Valus Mountains<br />' });

lyr_Landmass_0.setVisible(true);lyr_Grid_1.setVisible(true);lyr_Roadmaps_2.setVisible(false);lyr_Claims_3.setVisible(false);lyr_Dungeons2dungeons_4.setVisible(true);lyr_Settlements2settlements_5.setVisible(true);lyr_Regions_6.setVisible(false);
var layersList = [lyr_Landmass_0,lyr_Grid_1,lyr_Roadmaps_2,lyr_Claims_3,lyr_Dungeons2dungeons_4,lyr_Settlements2settlements_5,lyr_Regions_6];
lyr_Landmass_0.set('fieldAliases', {'fid': 'fid', 'Continent': 'Continent', });
lyr_Grid_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', });
lyr_Roadmaps_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Release Date': 'Release Date', 'Project': 'Project', 'Status': 'Status', });
lyr_Claims_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Status': 'Status', 'Claimant': 'Claimant', 'Reviewer': 'Reviewer', });
lyr_Dungeons2dungeons_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Status': 'Status', 'Claimant': 'Claimant', });
lyr_Settlements2settlements_5.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Alignment': 'Alignment', 'Tier': 'Tier', 'Race': 'Race', 'Capital': 'Capital', });
lyr_Regions_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Province': 'Province', });
lyr_Landmass_0.set('fieldImages', {'fid': 'Hidden', 'Continent': 'TextEdit', });
lyr_Grid_1.set('fieldImages', {'fid': 'Hidden', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', });
lyr_Roadmaps_2.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Release Date': 'DateTime', 'Project': 'TextEdit', 'Status': 'TextEdit', });
lyr_Claims_3.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Status': 'TextEdit', 'Claimant': 'TextEdit', 'Reviewer': 'TextEdit', });
lyr_Dungeons2dungeons_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Status': 'TextEdit', 'Claimant': 'TextEdit', });
lyr_Settlements2settlements_5.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Alignment': 'TextEdit', 'Tier': 'TextEdit', 'Race': 'TextEdit', 'Capital': 'CheckBox', });
lyr_Regions_6.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Province': 'TextEdit', });
lyr_Landmass_0.set('fieldLabels', {'Continent': 'no label', });
lyr_Grid_1.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', });
lyr_Roadmaps_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'Release Date': 'inline label - visible with data', 'Project': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_Claims_3.set('fieldLabels', {'Name': 'inline label - always visible', 'Status': 'inline label - always visible', 'Claimant': 'inline label - always visible', 'Reviewer': 'inline label - always visible', });
lyr_Dungeons2dungeons_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Status': 'inline label - always visible', 'Claimant': 'inline label - always visible', });
lyr_Settlements2settlements_5.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - always visible', 'Alignment': 'inline label - always visible', 'Tier': 'inline label - always visible', 'Race': 'inline label - always visible', 'Capital': 'hidden field', });
lyr_Regions_6.set('fieldLabels', {'Name': 'inline label - visible with data', 'Province': 'inline label - visible with data', });
lyr_Regions_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});