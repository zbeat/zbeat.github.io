mos = {
    "objectName": "ASSETFEATUREHIST",
    "className": "psdi.app.asset.AssetFeatureHistSet",
    "description": "History of features for an asset",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASSETFEATUREHISTID",
    "primaryKeyColumns": [
        "ASSETFEATUREHISTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Historical records (AssetFeatureHist) of the current Asset''s AssetFeature records. (Linear)",
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
            "objectName": "ASSETLOCRELATION",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "ASSETLOCRELATIONID",
            "targetKeys": "ASSETLOCRELATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset / Location Relation",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "FEATURE",
            "targetKeys": "ENDFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "FEATURE",
            "targetKeys": "FEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Feature",
            "longDescription": null
        },
        {
            "objectName": "FEATURES",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "FEATURE",
            "targetKeys": "STARTFEATURE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Feature",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "BASEMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ENDMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "STARTMEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "BASEMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ENDMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "STARTMEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSETFEATUREHIST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETFEATUREHIST",
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
            "attributeName": "ASSETFEATUREHISTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique identifier for the feature instance history record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETFEATUREID",
            "required": true,
            "persistent": true,
            "title": "Asset Feature ID",
            "remarks": "Unique identifier for the feature instance.",
            "sameAsAttribute": "ASSETFEATUREID",
            "sameAsObject": "ASSETFEATURE"
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
            "attributeName": "ENDFEATURE",
            "required": false,
            "persistent": true,
            "title": "End Feature",
            "remarks": "Generic feature that has at least one, labeled feature instance defined for this asset and identified to be used as a reference point.  Labels are required since reference points must be easily identifiable in the field.",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
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
            "attributeName": "ENDOFFSET",
            "required": false,
            "persistent": true,
            "title": "End Offset",
            "remarks": "Distance used in conjunction with the end reference point to determine where the feature instance ends.  ",
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
            "attributeName": "ENDYOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "End Y Offset Referent",
            "remarks": "Point from which the Y-Offset is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "ENDZOFFSETREF",
            "required": false,
            "persistent": true,
            "title": "End Z Offset Referent",
            "remarks": "Point from which the Z-Offset is measured.  ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FEATURE",
            "required": false,
            "persistent": true,
            "title": "Feature",
            "remarks": "A feature that has been associated with a linear asset.  A feature is created using the Features application and can be associated multiple times with one or more linear assets.   ",
            "sameAsAttribute": "FEATURE",
            "sameAsObject": "FEATURES"
        },
        {
            "attributeName": "LABEL",
            "required": false,
            "persistent": true,
            "title": "Label",
            "remarks": "Label used to differentiate feature instances.  A label is only required if the feature instance is used as a reference point to locate work or if 2 feature instances exist with the same measure, Y and Z offsets.",
            "sameAsAttribute": "LABEL",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "SHARED",
            "required": true,
            "persistent": true,
            "title": "Share With Related Assets",
            "remarks": "Specifies whether the feature will be shared by related linear assets. If the check box is selected, and you apply the feature to one linear asset, the feature will be visible to other linear assets that you specify as related to it. For example, if two linear assets share a segment, and you apply the feature to one of the assets, it will be visible to the other, as well.  ",
            "sameAsAttribute": "SHARED",
            "sameAsObject": "ASSETFEATURE"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site where the asset, with which this feature is associated, is located.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "STARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Start Measure",
            "remarks": "Absolute distance taken from the start of the linear asset to where this feature is initially encountered.  This can be manually entered or calculated by entering a start reference point and start offset.",
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
            "attributeName": "STARTYOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Y Offset",
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
            "attributeName": "STARTZOFFSET",
            "required": false,
            "persistent": true,
            "title": "Start Z Offset",
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
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset with which the feature is associated ",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "CREATEDDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "When an attribute is created, we add a new record to the history table with a created date.  When the attribute is modified, we add a removed date to that record and create a new record with a new created date.  This allows us easily access attribute history.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMOVEDDATE",
            "required": false,
            "persistent": true,
            "title": "Removed Date",
            "remarks": "When an attribute is created, we add a new record to the history table with a created date.  When the attribute is modified, we add a removed date to that record and create a new record with a new created date.  This allows us easily access attribute history.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
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
            "attributeName": "ASSETUID",
            "required": false,
            "persistent": true,
            "title": "Asset ID",
            "remarks": "Unique ID for the asset with which the feature is associated ",
            "sameAsAttribute": "ASSETUID",
            "sameAsObject": "ASSET"
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
            "remarks": "Where the value of the feature instance attribute changes in terms of a readily identifiable reference point (e.g. Mile Post 27).  The end measure of the end reference point + end offset = end measure for the current attribute value.   ",
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
            "attributeName": "ISLINEARREF",
            "required": true,
            "persistent": true,
            "title": "Is Reference Point",
            "remarks": "Specifies whether you can use the feature as a start or end point for a linear segment. If the check box is selected you can use the feature as a start or end reference point. If the check box is cleared, you cannot.",
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
            "attributeName": "ASOFDATE",
            "required": false,
            "persistent": false,
            "title": "As Of Date",
            "remarks": "Displays the relationships that existed with the current asset as of the date specified",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMMEASURE",
            "required": false,
            "persistent": false,
            "title": "From",
            "remarks": "non-persistent linear attribute used to filter features/attributes/relationships.  Value defaults to the lesser of the asset's start or end measure",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOMEASURE",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "non-persistent linear attribute used to filter features/attributes/relationships.  Value defaults to the greater of the asset's start or end measure.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LINEARASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find this AssetFeatureHist's linear Asset. (assetfeaturehist.assetnum=asset.assetnum and assetfeaturehist.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWASSETFEASPECHIST",
            "target": "ASSETFEASPECHIST",
            "remarks": "Relationship to the assetfeapechist table, used to find the asset feature specifications history records for a given asset. The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and assetfeatureid=:assetfeatureid and classstructureid=:classstructureid and ((removeddate is null and createddate<=:asofdate) or (removeddate is not null and :asofdate between createddate and removeddate)) and (startmeasure>=:frommeasure and endmeasure<=:tomeasure) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the start asset feature on the Asset Featurte.",
            "whereClause": "assetfeatureid =:startassetfeatureid",
            "cardinality": null
        },
        {
            "name": "ENDASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the assetfeature table, used to find the end asset feature on the Asset Feature.",
            "whereClause": "assetfeatureid =:endassetfeatureid",
            "cardinality": null
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the classstructure table, used to find the classstructure records for a given assetfeaturehist (classstructure.classstructureid=assetfeaturehist.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FEATURE",
            "target": "FEATURES",
            "remarks": "Relationship to the Features table, used to find the feature for this AssetFeatureHist. (features.feature=assetfeaturehist.feature). The resulting set will contain one object.",
            "whereClause": "feature = :feature",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "VIEWASSETFEATUREHIST",
            "source": "ASSET",
            "remarks": "Relationship to the assetfeaturehist table, used to find the asset feature history records for a given asset. The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and ((removeddate is null and createddate<=:asofdate) or (removeddate is not null and :asofdate between createddate and removeddate)) and ((startmeasure >= :frommeasure and startmeasure <= :tomeasure) or (endmeasure >= :frommeasure and endmeasure <= :tomeasure) or (startmeasure <= :frommeasure and endmeasure >= :tomeasure) or (startmeasure >= :tomeasure and endmeasure <= :frommeasure))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATUREHIST",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the AssetFeatureHist table, used to find the assetfeature history record for a given assetfeature (assetfeaturehist.assetfeatureid=assetfeature.assetfeatureid and assetfeaturehist.enddate is null). The resulting set will contain zero or one object.",
            "whereClause": "assetfeatureid=:assetfeatureid and removeddate is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WHEREISFEATURENOW",
            "source": "FEATURES",
            "remarks": "Relationship to the AssetFeatureHist table, used to find all AssetFeaturesHist records for this Feature that have not yet been removed. It answers the question 'Where is this feature currently used?'. (assetfeaturehist.feature=features.feature and assetfeaturehis.removeddate is null). The resulting set will contain zero or more objects.",
            "whereClause": "feature=:feature and removeddate is null",
            "cardinality": "UNDEFINED"
        }
    ]
}