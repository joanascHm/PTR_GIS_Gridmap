ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([0.002485, -37.002022, 60.002491, -0.002016]);
var wms_layers = [];

var format_Landmass_0 = new ol.format.GeoJSON();
var features_Landmass_0 = format_Landmass_0.readFeatures(json_Landmass_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
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
var format_Regions_1 = new ol.format.GeoJSON();
var features_Regions_1 = format_Regions_1.readFeatures(json_Regions_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Regions_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regions_1.addFeatures(features_Regions_1);
var lyr_Regions_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regions_1, 
                style: style_Regions_1,
                popuplayertitle: 'Regions',
                interactive: true,
    title: 'Regions<br />\
    <img src="styles/legend/Regions_1_0.png" /> GoldMoor<br />\
    <img src="styles/legend/Regions_1_1.png" /> <br />\
    <img src="styles/legend/Regions_1_2.png" /> Brennan Bluffs<br />\
    <img src="styles/legend/Regions_1_3.png" /> Tava\'s Cradle<br />\
    <img src="styles/legend/Regions_1_4.png" /> Helkori Wastes<br />\
    <img src="styles/legend/Regions_1_5.png" /> Riddle-Lands<br />\
    <img src="styles/legend/Regions_1_6.png" /> Strident Coast<br />\
    <img src="styles/legend/Regions_1_7.png" /> Dak\'Fron<br />\
    <img src="styles/legend/Regions_1_8.png" /> Tark Basin<br />\
    <img src="styles/legend/Regions_1_9.png" /> The Bend\'r-Mahk<br />\
    <img src="styles/legend/Regions_1_10.png" /> Alik\'r Dunes\'<br />\
    <img src="styles/legend/Regions_1_11.png" /> Bantha<br />\
    <img src="styles/legend/Regions_1_12.png" /> Colovian Highlands<br />\
    <img src="styles/legend/Regions_1_13.png" /> Devil\'s Den<br />\
    <img src="styles/legend/Regions_1_14.png" /> Dragontail Mountains<br />\
    <img src="styles/legend/Regions_1_15.png" /> Hew\'s Bane<br />\
    <img src="styles/legend/Regions_1_16.png" /> Kvetchi Pass<br />\
    <img src="styles/legend/Regions_1_17.png" /> Starfall<br />\
    <img src="styles/legend/Regions_1_18.png" /> Barrowlands<br />\
    <img src="styles/legend/Regions_1_19.png" /> Dasek Marsh<br />\
    <img src="styles/legend/Regions_1_20.png" /> Massiqueran Forest<br />\
    <img src="styles/legend/Regions_1_21.png" /> Mor\'s Ambit<br />\
    <img src="styles/legend/Regions_1_22.png" /> Ruma Floodlands<br />\
    <img src="styles/legend/Regions_1_23.png" /> West Weald<br />\
    <img src="styles/legend/Regions_1_24.png" /> Demergatur<br />\
    <img src="styles/legend/Regions_1_25.png" /> Heatlands<br />\
    <img src="styles/legend/Regions_1_26.png" /> Jerrall Mountains<br />\
    <img src="styles/legend/Regions_1_27.png" /> Bjoulsae Basin<br />\
    <img src="styles/legend/Regions_1_28.png" /> Dragonfields<br />\
    <img src="styles/legend/Regions_1_29.png" /> Ostheldir<br />\
    <img src="styles/legend/Regions_1_30.png" /> Abecean Sea<br />\
    <img src="styles/legend/Regions_1_31.png" /> Druadach Highlands<br />\
    <img src="styles/legend/Regions_1_32.png" /> Ogre\'s Tooth Mountains<br />\
    <img src="styles/legend/Regions_1_33.png" /> Raha\'s Landing<br />\
    <img src="styles/legend/Regions_1_34.png" /> Titan\'s Death<br />\
    <img src="styles/legend/Regions_1_35.png" /> Creag Coast<br />\
    <img src="styles/legend/Regions_1_36.png" /> Malekna Wood<br />\
    <img src="styles/legend/Regions_1_37.png" /> Wrothgarian Mountains<br />\
    <img src="styles/legend/Regions_1_38.png" /> Dellese Isles<br />\
    <img src="styles/legend/Regions_1_39.png" /> Glenumbra Moors<br />\
    <img src="styles/legend/Regions_1_40.png" /> Ilessan Hills<br />\
    <img src="styles/legend/Regions_1_41.png" /> Lesser Bretony<br />\
    <img src="styles/legend/Regions_1_42.png" /> Ravennia<br />\
    <img src="styles/legend/Regions_1_43.png" /> Skeffington Wood<br />\
    <img src="styles/legend/Regions_1_44.png" /> Balothian Bay<br />\
    <img src="styles/legend/Regions_1_45.png" /> Eltheric Ocean<br />\
    <img src="styles/legend/Regions_1_46.png" /> Gedalan<br />\
    <img src="styles/legend/Regions_1_47.png" /> Iliac Bay<br />\
    <img src="styles/legend/Regions_1_48.png" /> Kurallian Mountains<br />\
    <img src="styles/legend/Regions_1_49.png" /> Norcambria<br />\
    <img src="styles/legend/Regions_1_50.png" /> Caspar Isle<br />\
    <img src="styles/legend/Regions_1_51.png" /> Chain Isles<br />\
    <img src="styles/legend/Regions_1_52.png" /> Herne Isle<br />\
    <img src="styles/legend/Regions_1_53.png" /> Broken Cape<br />\
    <img src="styles/legend/Regions_1_54.png" /> Drajkmyr Marsh<br />\
    <img src="styles/legend/Regions_1_55.png" /> Eastmarch<br />\
    <img src="styles/legend/Regions_1_56.png" /> Gjerde Hills<br />\
    <img src="styles/legend/Regions_1_57.png" /> Gorvigh Ridge<br />\
    <img src="styles/legend/Regions_1_58.png" /> Grey Plains<br />\
    <img src="styles/legend/Regions_1_59.png" /> Hirsing Mountains<br />\
    <img src="styles/legend/Regions_1_60.png" /> Ivory Steppe<br />\
    <img src="styles/legend/Regions_1_61.png" /> Kilkreath Mountains<br />\
    <img src="styles/legend/Regions_1_62.png" /> Kreathi Dale<br />\
    <img src="styles/legend/Regions_1_63.png" /> Lorchwuir Heath<br />\
    <img src="styles/legend/Regions_1_64.png" /> Midkarth<br />\
    <img src="styles/legend/Regions_1_65.png" /> Njorvela<br />\
    <img src="styles/legend/Regions_1_66.png" /> Northshore<br />\
    <img src="styles/legend/Regions_1_67.png" /> Reaver\'s Shore<br />\
    <img src="styles/legend/Regions_1_68.png" /> Rift Valley<br />\
    <img src="styles/legend/Regions_1_69.png" /> Sea of Ghosts<br />\
    <img src="styles/legend/Regions_1_70.png" /> Skaldring Mountains<br />\
    <img src="styles/legend/Regions_1_71.png" /> Solitude Forest<br />\
    <img src="styles/legend/Regions_1_72.png" /> Sundered Hills<br />\
    <img src="styles/legend/Regions_1_73.png" /> Throat of the World<br />\
    <img src="styles/legend/Regions_1_74.png" /> Troll\'s Teeth<br />\
    <img src="styles/legend/Regions_1_75.png" /> Vaalstag Highlands<br />\
    <img src="styles/legend/Regions_1_76.png" /> Vorndgad Forest<br />\
    <img src="styles/legend/Regions_1_77.png" /> Wuurthal Plains<br />\
    <img src="styles/legend/Regions_1_78.png" /> Ysheim<br />\
    <img src="styles/legend/Regions_1_79.png" /> Cape Black<br />\
    <img src="styles/legend/Regions_1_80.png" /> Hrimbald Plateau<br />\
    <img src="styles/legend/Regions_1_81.png" /> Thorig Glacier<br />\
    <img src="styles/legend/Regions_1_82.png" /> Velothi Mountains<br />\
    <img src="styles/legend/Regions_1_83.png" /> Vromburh Waste<br />\
    <img src="styles/legend/Regions_1_84.png" /> Whaler\'s Coast<br />\
    <img src="styles/legend/Regions_1_85.png" /> Arenth-Arla<br />\
    <img src="styles/legend/Regions_1_86.png" /> Barrens<br />\
    <img src="styles/legend/Regions_1_87.png" /> Etiolatum<br />\
    <img src="styles/legend/Regions_1_88.png" /> Kavas Rim<br />\
    <img src="styles/legend/Regions_1_89.png" /> Molaquin Ren<br />\
    <img src="styles/legend/Regions_1_90.png" /> Niben Destra<br />\
    <img src="styles/legend/Regions_1_91.png" /> Niben Sester<br />\
    <img src="styles/legend/Regions_1_92.png" /> Serican Jungle<br />\
    <img src="styles/legend/Regions_1_93.png" /> The Rim<br />\
    <img src="styles/legend/Regions_1_94.png" /> Titan\'s Birth<br />\
    <img src="styles/legend/Regions_1_95.png" /> Valley of Altars<br />\
    <img src="styles/legend/Regions_1_96.png" /> Xarxen Mora<br />\
    <img src="styles/legend/Regions_1_97.png" /> Alkosh-Kuza<br />\
    <img src="styles/legend/Regions_1_98.png" /> Arata Ceyglynn<br />\
    <img src="styles/legend/Regions_1_99.png" /> Azurah\'s Bounty<br />\
    <img src="styles/legend/Regions_1_100.png" /> Blue Divide<br />\
    <img src="styles/legend/Regions_1_101.png" /> Cerulean Coast<br />\
    <img src="styles/legend/Regions_1_102.png" /> Dragon\'s Teeth<br />\
    <img src="styles/legend/Regions_1_103.png" /> Elden Grove<br />\
    <img src="styles/legend/Regions_1_104.png" /> Fyresent Coast<br />\
    <img src="styles/legend/Regions_1_105.png" /> Haset Hyarnai<br />\
    <img src="styles/legend/Regions_1_106.png" /> Iyamarr Coast<br />\
    <img src="styles/legend/Regions_1_107.png" /> Khenarthi\'s Roost<br />\
    <img src="styles/legend/Regions_1_108.png" /> Khras\'jur Canyon<br />\
    <img src="styles/legend/Regions_1_109.png" /> Lypan Floodlands<br />\
    <img src="styles/legend/Regions_1_110.png" /> Meditea<br />\
    <img src="styles/legend/Regions_1_111.png" /> Ne Quin-Al Desert<br />\
    <img src="styles/legend/Regions_1_112.png" /> Quin-Rawl<br />\
    <img src="styles/legend/Regions_1_113.png" /> Quinonda<br />\
    <img src="styles/legend/Regions_1_114.png" /> Riaskyl Morth<br />\
    <img src="styles/legend/Regions_1_115.png" /> Saimisil Steppes<br />\
    <img src="styles/legend/Regions_1_116.png" /> Sea of Mistis<br />\
    <img src="styles/legend/Regions_1_117.png" /> Shijoh Scrublands<br />\
    <img src="styles/legend/Regions_1_118.png" /> Silvenar Grove<br />\
    <img src="styles/legend/Regions_1_119.png" /> Tenmar Forest<br />\
    <img src="styles/legend/Regions_1_120.png" /> Topal Bay<br />\
    <img src="styles/legend/Regions_1_121.png" /> Topal Shores<br />\
    <img src="styles/legend/Regions_1_122.png" /> Ulunedai<br />\
    <img src="styles/legend/Regions_1_123.png" /> Vauriaval Isles<br />\
    <img src="styles/legend/Regions_1_124.png" /> Xyllo Basin<br />\
    <img src="styles/legend/Regions_1_125.png" /> Aanthirin<br />\
    <img src="styles/legend/Regions_1_126.png" /> Armun Ashlands<br />\
    <img src="styles/legend/Regions_1_127.png" /> Boethiiah\'s Spine<br />\
    <img src="styles/legend/Regions_1_128.png" /> Clambering Moor<br />\
    <img src="styles/legend/Regions_1_129.png" /> Coronati Basin`<br />\
    <img src="styles/legend/Regions_1_130.png" /> Dagon Urul<br />\
    <img src="styles/legend/Regions_1_131.png" /> Deshaan Plains<br />\
    <img src="styles/legend/Regions_1_132.png" /> Great Valley<br />\
    <img src="styles/legend/Regions_1_133.png" /> Grey Meadows<br />\
    <img src="styles/legend/Regions_1_134.png" /> Ilumat Highlands<br />\
    <img src="styles/legend/Regions_1_135.png" /> Julan-Shar<br />\
    <img src="styles/legend/Regions_1_136.png" /> Kartur Dale<br />\
    <img src="styles/legend/Regions_1_137.png" /> Mephalan Vales<br />\
    <img src="styles/legend/Regions_1_138.png" /> Molag Ruhn<br />\
    <img src="styles/legend/Regions_1_139.png" /> Mudflats<br />\
    <img src="styles/legend/Regions_1_140.png" /> Nedothril<br />\
    <img src="styles/legend/Regions_1_141.png" /> Orethan<br />\
    <img src="styles/legend/Regions_1_142.png" /> Othreleth Woods<br />\
    <img src="styles/legend/Regions_1_143.png" /> Padomaic Ocean<br />\
    <img src="styles/legend/Regions_1_144.png" /> Roth Roryn<br />\
    <img src="styles/legend/Regions_1_145.png" /> Sacred Lands<br />\
    <img src="styles/legend/Regions_1_146.png" /> Scath Anud<br />\
    <img src="styles/legend/Regions_1_147.png" /> Shipal Shin<br />\
    <img src="styles/legend/Regions_1_148.png" /> Stirk Isle<br />\
    <img src="styles/legend/Regions_1_149.png" /> Sunad Mora<br />\
    <img src="styles/legend/Regions_1_150.png" /> Sundered Scar<br />\
    <img src="styles/legend/Regions_1_151.png" /> Telvanni Isles<br />\
    <img src="styles/legend/Regions_1_152.png" /> Urush-Nal<br />\
    <img src="styles/legend/Regions_1_153.png" /> Valus Mountains<br />' });
var format_Roadmaps_2 = new ol.format.GeoJSON();
var features_Roadmaps_2 = format_Roadmaps_2.readFeatures(json_Roadmaps_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
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
    <img src="styles/legend/Claims_3_5.png" /> Waiting Review<br />' });
var format_Grid_4 = new ol.format.GeoJSON();
var features_Grid_4 = format_Grid_4.readFeatures(json_Grid_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Grid_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grid_4.addFeatures(features_Grid_4);
var lyr_Grid_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grid_4, 
                style: style_Grid_4,
                popuplayertitle: 'Grid',
                interactive: false,
                title: '<img src="styles/legend/Grid_4.png" /> Grid'
            });
var format_Dungeons_5 = new ol.format.GeoJSON();
var features_Dungeons_5 = format_Dungeons_5.readFeatures(json_Dungeons_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Dungeons_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dungeons_5.addFeatures(features_Dungeons_5);
var lyr_Dungeons_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dungeons_5,
maxResolution:1431.4550084447467,
 
                style: style_Dungeons_5,
                popuplayertitle: 'Dungeons',
                interactive: true,
    title: 'Dungeons<br />\
    <img src="styles/legend/Dungeons_5_0.png" /> Breton Castle Ruin<br />\
    <img src="styles/legend/Dungeons_5_1.png" /> Breton Crypt<br />\
    <img src="styles/legend/Dungeons_5_2.png" /> Camp<br />\
    <img src="styles/legend/Dungeons_5_3.png" /> Cave<br />\
    <img src="styles/legend/Dungeons_5_4.png" /> Direnni Ruin<br />\
    <img src="styles/legend/Dungeons_5_5.png" /> Dreugh Hive<br />\
    <img src="styles/legend/Dungeons_5_6.png" /> Grotto<br />\
    <img src="styles/legend/Dungeons_5_7.png" /> Landmark<br />\
    <img src="styles/legend/Dungeons_5_8.png" /> Mines<br />\
    <img src="styles/legend/Dungeons_5_9.png" /> Nedic Ruin<br />\
    <img src="styles/legend/Dungeons_5_10.png" /> Nord Barrow<br />\
    <img src="styles/legend/Dungeons_5_11.png" /> Nord Fortress Ruin<br />\
    <img src="styles/legend/Dungeons_5_12.png" /> Other Ruin<br />\
    <img src="styles/legend/Dungeons_5_13.png" /> Ra Gada Ruin<br />\
    <img src="styles/legend/Dungeons_5_14.png" /> Reachfolk Ruin<br />\
    <img src="styles/legend/Dungeons_5_15.png" /> Redguard Crypt<br />\
    <img src="styles/legend/Dungeons_5_16.png" /> Rourken Dwemer Ruin<br />\
    <img src="styles/legend/Dungeons_5_17.png" /> Shipwreck<br />\
    <img src="styles/legend/Dungeons_5_18.png" /> Thrid Empire Ruin<br />\
    <img src="styles/legend/Dungeons_5_19.png" /> Warp Ruin<br />' });
var format_Settlements_6 = new ol.format.GeoJSON();
var features_Settlements_6 = format_Settlements_6.readFeatures(json_Settlements_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Settlements_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Settlements_6.addFeatures(features_Settlements_6);
var lyr_Settlements_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Settlements_6,
maxResolution:4050.4567668451764,
 
                style: style_Settlements_6,
                popuplayertitle: 'Settlements',
                interactive: true,
    title: 'Settlements<br />\
    <img src="styles/legend/Settlements_6_0.png" /> 0<br />\
    <img src="styles/legend/Settlements_6_1.png" /> 1<br />\
    <img src="styles/legend/Settlements_6_2.png" /> 2<br />\
    <img src="styles/legend/Settlements_6_3.png" /> 3<br />\
    <img src="styles/legend/Settlements_6_4.png" /> 4<br />\
    <img src="styles/legend/Settlements_6_5.png" /> 5<br />\
    <img src="styles/legend/Settlements_6_6.png" /> 6<br />\
    <img src="styles/legend/Settlements_6_7.png" /> <br />' });
var group_RasterMaps = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Raster Maps'});

lyr_Landmass_0.setVisible(true);lyr_Regions_1.setVisible(false);lyr_Roadmaps_2.setVisible(false);lyr_Claims_3.setVisible(false);lyr_Grid_4.setVisible(true);lyr_Dungeons_5.setVisible(true);lyr_Settlements_6.setVisible(true);
var layersList = [lyr_Landmass_0,lyr_Regions_1,lyr_Roadmaps_2,lyr_Claims_3,lyr_Grid_4,lyr_Dungeons_5,lyr_Settlements_6];
lyr_Landmass_0.set('fieldAliases', {'fid': 'fid', 'Continent': 'Continent', });
lyr_Regions_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Province': 'Province', });
lyr_Roadmaps_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Release Date': 'Release Date', 'Project': 'Project', 'Status': 'Status', });
lyr_Claims_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Status': 'Status', 'Claimant': 'Claimant', 'Reviewer': 'Reviewer', });
lyr_Grid_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', });
lyr_Dungeons_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Status': 'Status', 'Claimant': 'Claimant', });
lyr_Settlements_6.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Alignment': 'Alignment', 'Tier': 'Tier', 'Race': 'Race', 'Capital': 'Capital', });
lyr_Landmass_0.set('fieldImages', {'fid': 'Hidden', 'Continent': 'TextEdit', });
lyr_Regions_1.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Province': 'TextEdit', });
lyr_Roadmaps_2.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Release Date': 'DateTime', 'Project': 'TextEdit', 'Status': 'TextEdit', });
lyr_Claims_3.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Status': 'TextEdit', 'Claimant': 'TextEdit', 'Reviewer': 'TextEdit', });
lyr_Grid_4.set('fieldImages', {'fid': 'Hidden', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', });
lyr_Dungeons_5.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Status': 'TextEdit', 'Claimant': 'TextEdit', });
lyr_Settlements_6.set('fieldImages', {'fid': 'Hidden', 'Nome': 'TextEdit', 'Alignment': 'TextEdit', 'Tier': 'TextEdit', 'Race': 'TextEdit', 'Capital': 'CheckBox', });
lyr_Landmass_0.set('fieldLabels', {'Continent': 'no label', });
lyr_Regions_1.set('fieldLabels', {'Name': 'inline label - always visible', 'Province': 'no label', });
lyr_Roadmaps_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Release Date': 'inline label - always visible', 'Project': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_Claims_3.set('fieldLabels', {'Name': 'inline label - always visible', 'Status': 'inline label - always visible', 'Claimant': 'inline label - always visible', 'Reviewer': 'inline label - always visible', });
lyr_Grid_4.set('fieldLabels', {'id': 'inline label - always visible', 'left': 'inline label - always visible', 'top': 'inline label - always visible', 'right': 'inline label - always visible', 'bottom': 'inline label - always visible', });
lyr_Dungeons_5.set('fieldLabels', {'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Status': 'inline label - always visible', 'Claimant': 'inline label - always visible', });
lyr_Settlements_6.set('fieldLabels', {'Nome': 'inline label - always visible', 'Alignment': 'inline label - always visible', 'Tier': 'inline label - always visible', 'Race': 'inline label - always visible', 'Capital': 'inline label - always visible', });
lyr_Settlements_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});