var size = 0;
var placement = 'point';
function categories_Dungeons_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Breton Castle Ruin':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.28125,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/BretonCastle.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Breton Crypt':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.28125,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/BretonCrypt.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Camp':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Camp.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cave':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Cave.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Direnni Ruin':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/DirenniRuin.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dreugh Hive':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/DreughHive.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Grotto':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Grotto.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Landmark':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Landmark.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mines':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Mines.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Nedic Ruin':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/NedicRuins.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Nord Barrow':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/NordicBarrows.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Nord Fortress Ruin':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/NordicFortressRuin.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Other Ruin':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/OtherRuins.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ra Gada Ruin':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/RagadaRuin.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Reachfolk Ruin':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/RechFolkRuins.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Redguard Crypt':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/RedguardCrypt.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rourken Dwemer Ruin':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/RourkenRuins.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Shipwreck':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Shipwreck.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Thrid Empire Ruin':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/ThridEmpireRuin.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Warp Ruin':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [32, 32],
                  scale: 1.1875,
                  anchor: [16.0, 16.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/WarpRuin.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Dungeons_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Type");
    var labelFont = "15600.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1200.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Dungeons_5(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
