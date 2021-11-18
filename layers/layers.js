var wms_layers = [];

var lyr_LPN_LS5_MS_1990010119901231_ToA_IDNtif_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://spacemap.lapan.go.id/erdas-iws/ogc/wms/indonesia_medres",
    attributions: ' ',
                              params: {
                                "LAYERS": "LPN_LS5_MS_19900101-19901231_ToA_IDN.tif",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "LPN_LS5_MS_19900101-19901231_ToA_IDN.tif",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LPN_LS5_MS_1990010119901231_ToA_IDNtif_0, 0]);

lyr_LPN_LS5_MS_1990010119901231_ToA_IDNtif_0.setVisible(true);
var layersList = [lyr_LPN_LS5_MS_1990010119901231_ToA_IDNtif_0];
