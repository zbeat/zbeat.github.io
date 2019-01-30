mos = {
    "objectName": "ASSETFEATURE",
    "className": "psdi.app.asset.AssetFeatureSet",
    "description": "Attributes that describe a feature on an asset",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASSETFEATUREID",
    "primaryKeyColumns": [
        "ASSETNUM",
        "FEATURE",
        "SITEID",
        "LINEARASSETFEATUREID"
    ],
    "logicalRelationships": [
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "SOURCEENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "SOURCESTARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "TARGETENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "TARGETSTARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "SOURCEENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "SOURCESTARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "TARGETENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "TARGETSTARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETMETER",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETMETER",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETSPEC",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETSPEC",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "NEWENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "New End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "NEWSTARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "New Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "OLDENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Old End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "OLDSTARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Old Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "SOURCEENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "SOURCESTARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "TARGETENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIB",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "TARGETSTARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "MEASUREMENT",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "MEASUREMENT",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "METERREADING",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "METERREADING",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "PM",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "PM",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "PM",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Current Asset''s AssetFeature records. (Linear)",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "ENDASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETFEATURE",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "ASSETFEATUREID",
            "targetKeys": "STARTASSETFEATUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "ASSETLOCRELATION",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "ASSETLOCRELATIONID",
            "targetKeys": "ASSETLOCRELATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset / Location Relation",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "FEATURE",
            "targetKeys": "ENDFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "FEATURE",
            "targetKeys": "FEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "FEATURE",
            "targetKeys": "STARTFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Asset Feature",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTOFFSETUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTOFFSETUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Offset Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETFEATURE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ASSETFEATUREID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique identifier for the feature instance.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHARED",
            "required": true,
            "persistent": true,
            "title": "Share With Related Assets",
            "remarks": "Specifies whether the feature will be shared by related linear assets. If the check box is selected, and you apply the feature to one linear asset, the feature will be visible to other linear assets that you specify as related to it. For example, if two linear assets share a segment, and you apply the feature to one of the assets, it will be visible to the other, as well.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Name of a list of attributes that applies to this instance of this feature instance combination, with the current measures.",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "STARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Start Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where this feature is initially encountered.  This can be manually entered or calculated by entering a start reference point and start offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where this feature ends.  This can be manually entered or calculated by entering an end reference point and end offset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Offset",
            "remarks": "Distance used in conjunction with the start reference point to determine where the feature instance begins.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Offset",
            "remarks": "Distance used in conjunction with the end reference point to determine where the feature instance ends.  ",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTYOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDYOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Y Offset",
            "remarks": "Perpendicular distance from this linear asset.  For example, if a sign is 10 feet to the right of the road, the Y-Offset is 10 feet.  This value is measured from the Y Reference Point and can be positive (right) or negative (left).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Start Y Offset Referent",
            "remarks": "Reference point from which the start Y-Offset (measure to the left or right of the linear asset) is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "End Y Offset Referent",
            "remarks": "Point from which the Y-Offset is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTZOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDZOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Z Offset",
            "remarks": "Distance above or below this linear asset.  For example, if a sign is 10 feet above the road, the  Z-Offset is 10 feet.  This value is measured from the Z  Reference Point and can be positive (above) or negative (below).",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTZOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "Start Z Offset Referent",
            "remarks": "Reference point from which the start Z-Offset (distance above or below the linear asset) is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDZOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "End Z Offset Referent",
            "remarks": "Point from which the Z-Offset is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site where the asset, with which this feature is associated, is located.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "LABEL",
            "required": false,
            "persistent": true,
            "title": "Label",
            "remarks": "Label used to differentiate feature instances.  A label is only required if the feature instance is used as a reference point to locate work or if 2 feature instances exist with the same measure, Y and Z offsets.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FEATURE",
            "required": true,
            "persistent": true,
            "title": "Feature",
            "remarks": "A feature that has been associated with a linear asset.  A feature is created using the Features application and can be associated multiple times with one or more linear assets.   ",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset with which the feature is associated ",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTFEATURE",
            "required": false,
            "persistent": true,
            "title": "Start Feature",
            "remarks": "Generic feature that has at least one, labeled feature instance defined for this asset and identified to be used as a reference point.  Labels are required since reference points must be easily identifiable in the field.",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "ENDFEATURE",
            "required": false,
            "persistent": true,
            "title": "End Feature",
            "remarks": "Generic feature that has at least one, labeled feature instance defined for this asset and identified to be used as a reference point.  Labels are required since reference points must be easily identifiable in the field.",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ASSETUID",
            "required": false,
            "persistent": true,
            "title": "Asset ID",
            "remarks": "Unique ID for the asset with which the feature is associated ",
            "sameAsAttribute": "ASSETUID",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "FEATURESID",
            "required": false,
            "persistent": true,
            "title": "Feature ID",
            "remarks": "Identifies the Features record. This value must be unique for all Features records.",
            "sameAsAttribute": "FEATURESID",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "STARTASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "Start Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the start offset, to determine the start measure for this feature instance.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDASSETFEATUREID",
            "required": false,
            "persistent": true,
            "title": "End Feature ID",
            "remarks": "A previously defined feature or relationship used, in conjunction with the end offset, to determine the end measure for this feature instance.   ",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "FROMRELATEDASSET",
            "required": true,
            "persistent": false,
            "title": "On Related Asset",
            "remarks": "When this field to be checked, it means that this feature instance is associated with  another linear asset and was selected to be 'Shared With Related Assets'.  It appears on the current asset since it has a relationship with that asset at the point where the feature was associated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISLINEARREF",
            "required": true,
            "persistent": true,
            "title": "Is Reference Point",
            "remarks": "When checked, allows user to identify this feature instance as a start or end point for a linear segment.  This value defaults from the feature.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETLOCRELATIONID",
            "required": false,
            "persistent": true,
            "title": "AssetLocRelation ID",
            "remarks": "When a relationship is identified as a reference point, it will create feature instances.  This is the unique identifier for the relationship that generated this feature instance.",
            "sameAsAttribute": "ASSETLOCRELATIONID",
            "sameAsObject": "ASSETLOCRELATION"
        },
        {
            "attributeName": "STARTFEATURELABEL",
            "required": false,
            "persistent": true,
            "title": "Reference Point",
            "remarks": "Where the feature instance starts in terms of a readily identifiable reference point (e.g. Mile Post 27).  The start measure of the reference point + start offset = start measure for the current feature instance.   ",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "ENDFEATURELABEL",
            "required": false,
            "persistent": true,
            "title": "Reference Point",
            "remarks": "Where the feature instance ends in terms of a readily identifiable reference point (e.g. Mile Post 27).  The end measure of the end reference point + end offset = end measure for the current feature instance.   ",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "BASEMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Base Measure",
            "remarks": "Base Measure Units",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ENDBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Base Measure",
            "remarks": "An absolute measure that is calculated by converting from the end measure using a defined conversion method.  Conversion methods are defined in the Assets application using the Add/Modify Conversions action.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENDMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of End Measure",
            "remarks": "Unit of measure for the starting measure of this feature.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTBASEMEASURE",
            "required": false,
            "persistent": true,
            "title": "Start Base Measure",
            "remarks": "An absolute measure that is calculated by converting from the end measure using a defined conversion method.  Conversion methods are defined in the Assets application using the Add/Modify Conversions action.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Start Measure",
            "remarks": "Unit of measure for the starting measure of this feature.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "STARTOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Start Offset",
            "remarks": "Unit of measure for the offset (before or after) from the start reference point of this feature.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ENDOFFSETUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of End Offset",
            "remarks": "Unit of measure for the offset (before or after) from the end reference point of this feature.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "LINEARASSETFEATUREID",
            "required": true,
            "persistent": true,
            "title": "Linear Asset Feature Id",
            "remarks": "Part of the primary key to differentiate asset features.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AFCREATEDFROMAR",
            "required": false,
            "persistent": false,
            "title": "AssetFeature created from Asset Relationship",
            "remarks": "Non Persistent flg to check if this AssetFeature created from Asset Relationship",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AFCREATEDFROMAF",
            "required": false,
            "persistent": false,
            "title": "Asset Feature created from Asset Feature",
            "remarks": "Non Persistent flg checks to if the Asset Feature created from Asset Feature",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISAFMODIFIED",
            "required": false,
            "persistent": false,
            "title": "Is Asset Feature Modified",
            "remarks": "Is Asset Feature Modified",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDBYRELATIONSHIP",
            "required": false,
            "persistent": false,
            "title": "Created by Relationship",
            "remarks": "If the Created by Relationship is checked, which is driven by the AssetLocRelationNum on the feature. If the Created by Relationship checkbox is unchecked we remove the link between asset relationship and asset feature. And allow the asset feature fields to be edited.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HIERARCHYPATH",
            "required": false,
            "persistent": false,
            "title": "Hierarchy Path",
            "remarks": "Sets value to HIERARCHYPATH, if the assetfeature has an associated CLASSSTRUCTURE record",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "CLASSSTRUCTURE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this AssetFeature's linear Asset. (assetfeature.assetnum=asset.assetnum and assetfeature.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this AssetFeature's Asset. (Asset.Assetnum=AssetFeature.Assetnum and Asset.SiteId=AssetFeature.SiteId). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEAT_ASSETFEAT",
            "target": "ASSETFEATURE",
            "remarks": "Asset Feature to find Asset Feature",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and assetfeatureid=:assetfeatureid",
            "cardinality": null
        },
        {
            "name": "ENDASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record using to locate the end of this assetfeature (assetfeature.asseetfeatureid=assetfeature.endassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LNRASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the AssetFeature table, used to find the assetfeature records for the given AssetFeatureId",
            "whereClause": "startassetfeatureid=:assetfeatureid or endassetfeatureid=:assetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECALASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Linear Recalibration",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "STARTASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record using to locate the start of this assetfeature (assetfeature.asseetfeatureid=assetfeature.startassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATUREHIST",
            "target": "ASSETFEATUREHIST",
            "remarks": "Relationship to the AssetFeatureHist table, used to find the assetfeature history record for a given assetfeature (assetfeaturehist.assetfeatureid=assetfeature.assetfeatureid and assetfeaturehist.enddate is null). The resulting set will contain zero or one object.",
            "whereClause": "assetfeatureid=:assetfeatureid and removeddate is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURESPEC",
            "target": "ASSETFEATURESPEC",
            "remarks": "Relationship to the assetfeaturespec table, used to find the assetfeaturespec records for a given assetfeature. (assetfeature.assetfeatureid=assetfeaturespec.refobjectid and assetfeaturespec.refobjectname='ASSETFEATURE') The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid = :assetfeatureid and refobjectname = 'ASSETFEATURE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURESPECCLASS",
            "target": "ASSETFEATURESPEC",
            "remarks": "Relationship to the assetfeaturespec table, used to find the assetfeaturespec records for a given assetfeature (assetfeature.assetfeatureid=assetfeaturespec.refobjectid and assetfeaturespec.refobjecti='ASSETFEATURE' and assetfeature.classstructureid=assetfeaturespec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid = :assetfeatureid and refobjectname = 'ASSETFEATURE' and classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LNRASSETFEATSPEC",
            "target": "ASSETFEATURESPEC",
            "remarks": "Relationship to the AssetFeatureSpec table, used to find the assetfeature records for the given AssetFeatureId",
            "whereClause": "startassetfeatureid=:assetfeatureid or endassetfeatureid=:assetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECALASSETFEATSPEC",
            "target": "ASSETFEATURESPEC",
            "remarks": "Linear Recalibration for Asset Feature Spec",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LNRASSETLOCRELATION",
            "target": "ASSETLOCRELATION",
            "remarks": "Relationship to the AssetLocRelation table used to find AssetLocRelationships for this AssetFeature",
            "whereClause": "(sourcestartassetfeatureid=:assetfeatureid or sourceendassetfeatureid=:assetfeatureid) or (targetstartassetfeatureid=:assetfeatureid or targetendassetfeatureid=:assetfeatureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCRELATION",
            "target": "ASSETLOCRELATION",
            "remarks": "Relationship to the AssetLoc Relationship table, used to find a Asset Relationship record for a given AssetFeature. (AssetFeature.assetlocrelationid= AssetLocRelation.assetlocrelationi). The resulting set will contain zero or one object.",
            "whereClause": "assetlocrelationid=:assetlocrelationid",
            "cardinality": null
        },
        {
            "name": "LNRASSETMETER",
            "target": "ASSETMETER",
            "remarks": "Relationship to the AssetMeter table, used to find the assetfeature records for the given AssetFeatureId",
            "whereClause": "startassetfeatureid=:assetfeatureid or endassetfeatureid=:assetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECALASSETMETER",
            "target": "ASSETMETER",
            "remarks": "Linear Recalibration",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "RECALASSETSPEC",
            "target": "ASSETSPEC",
            "remarks": "Linear Recalibration AssetSpec",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LNRASSETSPEC",
            "target": "ASSETSPEC",
            "remarks": "Relationship to the AssetSpec table, used to find the assetfeature records for the given AssetFeatureId",
            "whereClause": "startassetfeatureid=:assetfeatureid or endassetfeatureid=:assetfeatureid",
            "cardinality": null
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given assetfeature (classspec.classstructureid = assetfeature.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstructure table, used to find the classstructure records for a given assetfeature (classstructure.classstructureid=assetfeatue.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDFEATURE",
            "target": "FEATURES",
            "remarks": "Relationship to the Features table, used to find the EndFeature that delineates where this AssetFeature's Feature ends.  EndFeature is null and zero objects are returned if this AssetFeature is a point feature. (features.feature=assetfeature.endfeature). The resulting set will contain zero or one object.",
            "whereClause": "feature=:endfeature",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURE",
            "target": "FEATURES",
            "remarks": "Relationship to the Features table, used to find the feature for this AssetFeature. (features.feature=assetfeature.feature). The resulting set will contain one object.",
            "whereClause": "feature=:feature",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTFEATURE",
            "target": "FEATURES",
            "remarks": "Relationship to the Features table, used to find the StartFeature that delineates where this AssetFeature's Feature begins.  StartFeature is null and zero objects are returned if this AssetFeature is a point feature. (features.feature=assetfeature.startfeature). The resulting set will contain zero or one object.",
            "whereClause": "feature=:startfeature",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AFRECALIB",
            "target": "LNRRECALIB",
            "remarks": "AssetFeature to LNRRecalib",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "NONAFRECALIB",
            "target": "LNRRECALIBNONAF",
            "remarks": "AssetFeature to LNRRECALIBNONAF",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LNRMULTIASSETLOCCI",
            "target": "MULTIASSETLOCCI",
            "remarks": "Relationship to the MultiAssetLocCI table to find records for the WORKORDER for all Asset/Loc/CI.",
            "whereClause": "(startassetfeatureid=:assetfeatureid or endassetfeatureid=:assetfeatureid) and recordclass in ('WORKORDER', 'CHANGE','RELEASE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LNRMULTIASSETLOCCITICKET",
            "target": "MULTIASSETLOCCI",
            "remarks": "Relationship to the MultiAssetLocCI table to find records for the TICKET for all Asset/Loc/CI.",
            "whereClause": "(startassetfeatureid=:assetfeatureid or endassetfeatureid=:assetfeatureid) and recordclass in ('SR', 'INCIDENT', 'ACTIVITY', 'PROBLEM')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LNRPM",
            "target": "PM",
            "remarks": "Relationship to the PM table, used to find the assetfeature records for the given AssetFeatureId",
            "whereClause": "startassetfeatureid=:assetfeatureid or endassetfeatureid=:assetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECALASSETPM",
            "target": "PM",
            "remarks": "Linear Recalibration",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "RECALRSTOP",
            "target": "ROUTE_STOP",
            "remarks": "Linear Recalibration for Route_Stop",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LNRROUTE_STOP",
            "target": "ROUTE_STOP",
            "remarks": "Relationship to the route_stop table, used to find the assetfeature records for the given AssetFeatureId",
            "whereClause": "startassetfeatureid=:assetfeatureid or endassetfeatureid=:assetfeatureid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ASSETFEATURE",
            "source": "ASSET",
            "remarks": "Relationship to the AssetFeature table, used to find all AssetFeatures for this Asset. (assetfeature.assetnum=asset.assetnum and assetfeature.siteid=asset.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and assetlocrelationuid is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURES",
            "source": "ASSET",
            "remarks": "Relationship to the AssetFeature table, used to find all AssetFeatures for this Asset. (assetfeature.assetnum=asset.assetnum and assetfeature.siteid=asset.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURES_ALL",
            "source": "ASSET",
            "remarks": "Relationship to the AssetFeature table used to find AssetFeatures for this Asset that fall within the range of the asset's FROMMEASURE and TOMEASURE.  The result includes those features that are on assets that have a relationship with this asset, have shared=1 and are parallel to this asset.  That is, this and the related asset have the sourcestartmeasure equal to targetstartmeasure and sourceendmeasure equal to targetendmeasure.  (assetfeature.assetnum=asset.assetnum and assetfeature.siteid=asset.siteid and (  (assetfeature.startmeasure >= asset.frommeasure and assetfeature.startmeasure <= asset.tomeasure) or (assetfeature.endmeasure >= asset.frommeasure and assetfeature.endmeasure <= asset.tomeasure) or (assetfeature.startmeasure <= asset.frommeasure and assetfeature.endmeasure >= asset.tomeasure) or (assetfeature.startmeasure >= asset.tomeasure and assetfeature.endmeasure <= asset.frommeasure)) or exists (select 1 from assetfeature af where af.shared=1 and af.siteid=asset.siteid  and af.assetnum!=asset.assetnum and af.assetfeatureid=assetfeature.assetfeatureid and exists (select 1 from assetlocrelation alr where alr.siteid=asset.siteid and alr.sourcestartmeasure=alr.targetstartmeasure and alr.sourceendmeasure=alr.targetendmeasure and (alr.sourceassetnum=af.assetnum and alr.targetassetnum=asset.assetnum or alr.targetassetnum=af.assetnum and alr.sourceassetnum=asset.assetnum) and (((alr.sourcestartmeasure <= af.startmeasure and alr.sourceendmeasure >= af.startmeasure) or (alr.sourcestartmeasure <= af.endmeasure and alr.sourceendmeasure >= af.endmeasure) or (alr.sourcestartmeasure >= af.startmeasure and alr.sourceendmeasure <= af.endmeasure) or (alr.sourcestartmeasure >= af.endmeasure and alr.sourceendmeasure <= af.startmeasure)) and ((af.startmeasure >= asset.frommeasure and af.startmeasure <= asset.tomeasure) or (af.endmeasure >= asset.frommeasure and af.endmeasure <= asset.tomeasure) or (af.startmeasure <= asset.frommeasure and af.endmeasure >= asset.tomeasure) or (af.startmeasure >= asset.tomeasure and af.endmeasure <= asset.frommeasure))))) ).  The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum  and siteid=:siteid and (  (startmeasure >= :frommeasure and startmeasure <= :tomeasure) or (endmeasure >= :frommeasure and endmeasure <= :tomeasure) or (startmeasure <= :frommeasure and endmeasure >= :tomeasure) or (startmeasure >= :tomeasure and endmeasure <= :frommeasure)) or exists (select 1 from assetfeature af where shared=1 and siteid=:siteid  and assetnum!=:assetnum and af.assetfeatureid=assetfeature.assetfeatureid and exists (select 1 from assetlocrelation alr where alr.siteid=:siteid and alr.sourcestartmeasure=alr.targetstartmeasure and alr.sourceendmeasure=alr.targetendmeasure and (alr.sourceassetnum=af.assetnum and alr.targetassetnum=:assetnum or alr.targetassetnum=af.assetnum and alr.sourceassetnum=:assetnum) and (((alr.sourcestartmeasure <= af.startmeasure and alr.sourceendmeasure >= af.startmeasure) or (alr.sourcestartmeasure <= af.endmeasure and alr.sourceendmeasure >= af.endmeasure) or (alr.sourcestartmeasure >= af.startmeasure and alr.sourceendmeasure <= af.endmeasure) or (alr.sourcestartmeasure >= af.endmeasure and alr.sourceendmeasure <= af.startmeasure)) and ((af.startmeasure >= :frommeasure and af.startmeasure <= :tomeasure) or (af.endmeasure >= :frommeasure and af.endmeasure <= :tomeasure) or (af.startmeasure <= :frommeasure and af.endmeasure >= :tomeasure) or (af.startmeasure >= :tomeasure and af.endmeasure <= :frommeasure)))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURES_UNIONALL",
            "source": "ASSET",
            "remarks": "Relationship to the AssetFeature table used to find AssetFeatures for this Asset that fall within the range of the asset's FROMMEASURE and TOMEASURE.  The result includes those features that are on assets that have a relationship with this asset, have shared=1 and are parallel to this asset.  That is, this and the related asset have the sourcestartmeasure equal to targetstartmeasure and sourceendmeasure equal to targetendmeasure.  (assetnum=asset.assetnum and siteid=asset.siteid and islinearref=1 and ((startmeasure >= asset.frommeasure and startmeasure <= asset.tomeasure) or (endmeasure >= asset.frommeasure and endmeasure <= asset.tomeasure) or (startmeasure <= asset.frommeasure and endmeasure >= asset.tomeasure) or (startmeasure >= asset.tomeasure and endmeasure <= asset.frommeasure)) union all (select * from assetfeature af where shared=1 and siteid=asset.siteid  and assetnum!=asset.assetnum and exists (select 1 from assetlocrelation alr where alr.siteid=asset.siteid and alr.sourcestartmeasure=alr.targetstartmeasure and alr.sourceendmeasure=alr.targetendmeasure and (alr.sourceassetnum=af.assetnum and alr.targetassetnum=asset.assetnum or alr.targetassetnum=af.assetnum and alr.sourceassetnum=asset.assetnum) and (((alr.sourcestartmeasure <= af.startmeasure and alr.sourceendmeasure >= af.startmeasure) or (alr.sourcestartmeasure <= af.endmeasure and alr.sourceendmeasure >= af.endmeasure) or (alr.sourcestartmeasure >= af.startmeasure and alr.sourceendmeasure <= af.endmeasure) or (alr.sourcestartmeasure >= af.endmeasure and alr.sourceendmeasure <= af.startmeasure)) and ((af.startmeasure >= asset.frommeasure and af.startmeasure <= asset.tomeasure) or (af.endmeasure >= asset.frommeasure and af.endmeasure <= asset.tomeasure) or (af.startmeasure <= asset.frommeasure and af.endmeasure >= asset.tomeasure) or (af.startmeasure >= asset.tomeasure and af.endmeasure <= asset.frommeasure)))))).  The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and islinearref=1 and ((startmeasure >= :frommeasure and startmeasure <= :tomeasure) or (endmeasure >= :frommeasure and endmeasure <= :tomeasure) or (startmeasure <= :frommeasure and endmeasure >= :tomeasure) or (startmeasure >= :tomeasure and endmeasure <= :frommeasure)) union all (select * from assetfeature af where shared=1 and siteid=:siteid  and assetnum!=:assetnum and exists (select 1 from assetlocrelation alr where alr.siteid=:siteid and alr.sourcestartmeasure=alr.targetstartmeasure and alr.sourceendmeasure=alr.targetendmeasure and (alr.sourceassetnum=af.assetnum and alr.targetassetnum=:assetnum or alr.targetassetnum=af.assetnum and alr.sourceassetnum=:assetnum) and (((alr.sourcestartmeasure <= af.startmeasure and alr.sourceendmeasure >= af.startmeasure) or (alr.sourcestartmeasure <= af.endmeasure and alr.sourceendmeasure >= af.endmeasure) or (alr.sourcestartmeasure >= af.startmeasure and alr.sourceendmeasure <= af.endmeasure) or (alr.sourcestartmeasure >= af.endmeasure and alr.sourceendmeasure <= af.startmeasure)) and ((af.startmeasure >= :frommeasure and af.startmeasure <= :tomeasure) or (af.endmeasure >= :frommeasure and af.endmeasure <= :tomeasure) or (af.startmeasure <= :frommeasure and af.endmeasure >= :tomeasure) or (af.startmeasure >= :tomeasure and af.endmeasure <= :frommeasure)))))",
            "cardinality": null
        },
        {
            "name": "ENDASSETFEATURE",
            "source": "ASSETFEASPECHIST",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetfeaspechist for its end asset feature. (assetfeature.asseetfeatureid=assetfeaspechist.endassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "source": "ASSETFEASPECHIST",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetfeaspechist for its start asset feature. (assetfeature.asseetfeatureid=assetfeaspeclist.startassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEAT_ASSETFEAT",
            "source": "ASSETFEATURE",
            "remarks": "Asset Feature to find Asset Feature",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and assetfeatureid=:assetfeatureid",
            "cardinality": null
        },
        {
            "name": "ENDASSETFEATURE",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record using to locate the end of this assetfeature (assetfeature.asseetfeatureid=assetfeature.endassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LNRASSETFEATURE",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the AssetFeature table, used to find the assetfeature records for the given AssetFeatureId",
            "whereClause": "startassetfeatureid=:assetfeatureid or endassetfeatureid=:assetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECALASSETFEATURE",
            "source": "ASSETFEATURE",
            "remarks": "Linear Recalibration",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "STARTASSETFEATURE",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record using to locate the start of this assetfeature (assetfeature.asseetfeatureid=assetfeature.startassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "source": "ASSETFEATUREHIST",
            "remarks": "Relationship to the assetfeature table, used to find the start asset feature on the Asset Featurte.",
            "whereClause": "assetfeatureid =:startassetfeatureid",
            "cardinality": null
        },
        {
            "name": "ENDASSETFEATURE",
            "source": "ASSETFEATUREHIST",
            "remarks": "Relationship to the assetfeature table, used to find the end asset feature on the Asset Feature.",
            "whereClause": "assetfeatureid =:endassetfeatureid",
            "cardinality": null
        },
        {
            "name": "LNRASSETFEATURESPEC",
            "source": "ASSETFEATURESPEC",
            "remarks": "To find Asset Fetaure record for the given Asset Feature Specification record.",
            "whereClause": "assetfeatureid=:refobjectid and classstructureid=:classstructureid",
            "cardinality": null
        },
        {
            "name": "STARTASSETFEATURE",
            "source": "ASSETFEATURESPEC",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetfeaturespec for its start asset feature. (assetfeature.asseetfeatureid=assetfeaturespec.startassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "source": "ASSETFEATURESPEC",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetfeaturespec for its end asset feature. (assetfeature.asseetfeatureid=assetfeaturespec.endassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETENDASSETFEATURE",
            "source": "ASSETLOCRELATION",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetlocrelation for its target end asset feature. (assetfeature.asseetfeatureid=assetlocrelation.targetendassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid=:targetendassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETSTARTASSETFEATURE",
            "source": "ASSETLOCRELATION",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetlocrelation for its target start asset feature. (assetfeature.asseetfeatureid=assetlocrelation.targetstartassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid=:targetstartassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCEENDASSETFEATURE",
            "source": "ASSETLOCRELATION",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetlocrelation for its source end asset feature. (assetfeature.asseetfeatureid=assetlocrelation.sourceendassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid=:sourceendassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCESTARTASSETFEATURE",
            "source": "ASSETLOCRELATION",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetlocrelation for its source start asset feature. (assetfeature.asseetfeatureid=assetlocrelation.sourcestartassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:sourcestartassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURE",
            "source": "ASSETLOCRELATION",
            "remarks": "Relationship to the AssetFeature table, used to find a Asset feature record for a given AssetLoc Relationship. (AssetLocRelation.assetlocrelationid= AssetFeature.assetlocrelationi). The resulting set will contain zero or one object.",
            "whereClause": "assetlocrelationid=:assetlocrelationid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETENDASSETFEATURE",
            "source": "ASSETLOCRELHIST",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetlocrelhist for its target end asset feature. (assetfeature.asseetfeatureid=assetlocrelhist.targetendassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:targetendassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCESTARTASSETFEATURE",
            "source": "ASSETLOCRELHIST",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetlocrelhist for its source start asset feature. (assetfeature.asseetfeatureid=assetlocrelhist .sourcestartassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:sourcestartassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETSTARTASSETFEATURE",
            "source": "ASSETLOCRELHIST",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetlocrelhist for its target start asset feature. (assetfeature.asseetfeatureid=assetlocrelhist .targetstartassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:targetstartassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCEENDASSETFEATURE",
            "source": "ASSETLOCRELHIST",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetlocrelhist for its source end asset feature. (assetfeature.asseetfeatureid=assetlocrelhist.sourceendassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:sourceendassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "source": "ASSETMETER",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a this assetmeter's start asset feature. (assetfeature.assetfeatureid=assetmeter.startassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "source": "ASSETMETER",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for this assetmeter's end asset feature. (assetfeature.assetfeatureid=assetmeter.endassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "source": "ASSETSPEC",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetfspec for its end asset feature. (assetfeature.assetfeatureid=assetspec.endassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "source": "ASSETSPEC",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetspec for its start asset feature. (assetfeature.assetfeatureid=assetspec.startassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "source": "ASSETSPECHIST",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetspechist for its end asset feature. (assetfeature.asseetfeatureid=assetspechist.endassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "source": "ASSETSPECHIST",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for a given assetspechist for its start asset feature. (assetfeature.asseetfeatureid=assetspechist.startassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WHEREFEATURE",
            "source": "FEATURES",
            "remarks": "Relationship to the AssetFeature table, used to find all AssetFeatures for this Feature, that is, it answers the question 'Where is this feature used?'. (assetfeature.feature=features.feature). The resulting set will contain zero or more objects.",
            "whereClause": "feature=:feature",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "source": "MEASUREMENT",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for this meaurement's end asset feature. (assetfeature.assetfeatureid=measurement.endassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "source": "MEASUREMENT",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for this meaurement's start asset feature. (assetfeature.assetfeatureid=measurement.startassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "source": "METERREADING",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for this meterreading's end asset feature. (assetfeature.assetfeatureid=meterreading.endassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid=:endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "source": "METERREADING",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record for this meterreading's start asset feature. (assetfeature.assetfeatureid=meterreading.startassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid=:startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "source": "MULTIASSETLOCCI",
            "remarks": "The Multiassetlocci's start feature (assetfeature.assetfeatureID = MULTIASSETLOCCI.startassetfeatureID).  The set will contain zero or one object.",
            "whereClause": "assetfeatureid = :startassetfeatureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURE",
            "source": "MULTIASSETLOCCI",
            "remarks": "The Multiassetlocci's asset feature (assetfeature.assetfeatureID = Multiassetlocci.assetfeatureID).  The set will contain zero or one object.",
            "whereClause": "assetfeatureid = :assetfeatureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "source": "MULTIASSETLOCCI",
            "remarks": "The Multiassetlocci's end feature (assetfeature.assetfeatureID = Multiassetlocci.endassetfeatureID).  The set will contain zero or one object.",
            "whereClause": "assetfeatureid = :endassetfeatureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "source": "MULTIASSETLOCCIPR",
            "remarks": "The MultiassetlocciPR's start feature.",
            "whereClause": "assetfeatureid=:startassetfeatureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURE",
            "source": "MULTIASSETLOCCIPR",
            "remarks": "Asset feature relationship.",
            "whereClause": "assetfeatureid in (select assetfeatureid from multiassetlocci where multiassetlocci.multiid = :multiid and multiassetlocci.siteid = :siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "source": "MULTIASSETLOCCIPR",
            "remarks": "The Multiassetlocci's end feature.",
            "whereClause": "assetfeatureid=:endassetfeatureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "source": "PM",
            "remarks": "The PM's end feature (assetfeature.assetfeatureID = PM.endassetfeatureID).  The set will contain zero or one object.",
            "whereClause": "assetfeatureid = :endassetfeatureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURE",
            "source": "PM",
            "remarks": "The PM's asset feature (assetfeature.assetfeatureID = PM.assetfeatureID).  The set will contain zero or one object.",
            "whereClause": "assetfeatureid = :assetfeatureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "source": "PM",
            "remarks": "The PM's start feature (assetfeature.assetfeatureID = PM.startassetfeatureID).  The set will contain zero or one object.",
            "whereClause": "assetfeatureid = :startassetfeatureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "source": "ROUTE_STOP",
            "remarks": "Relationship to the assetfeature table, used to find the end asset feature on the route stop.",
            "whereClause": "assetfeatureid = :endassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURE",
            "source": "ROUTE_STOP",
            "remarks": "Relationship to the asset features table, used to find the asset feature on the route stop.",
            "whereClause": "assetfeatureid = :assetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "source": "ROUTE_STOP",
            "remarks": "Relationship to the assetfeature table, used to find the start asset feature on the route stop.",
            "whereClause": "assetfeatureid = :startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "source": "WOLINEARSEARCH",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record being used by this WOLINEARSEARCH object to filter PMs, SRs or Work Orders by the Start Feature Label (assetfeature.asseetfeatureid=wolinearsearch.startassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:startassetfeatureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDASSETFEATURE",
            "source": "WOLINEARSEARCH",
            "remarks": "Relationship to the assetfeature table, used to find the assetfeature record being used by this WOLINEARSEARCH object to filter PMs, SRs or Work Orders by the End Feature Label (assetfeature.asseetfeatureid=wolinearsearch.endassetfeatureid) The resulting set will contain one object.",
            "whereClause": "assetfeatureid =:endassetfeatureid",
            "cardinality": "UNDEFINED"
        }
    ]
}