mos = {
    "objectName": "ASSET",
    "className": "psdi.app.asset.AssetSet",
    "description": "The ASSET Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "ASSETUID",
    "primaryKeyColumns": [
        "SITEID",
        "ASSETNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "AMCREWTOOL",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Tool Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "AFFECTEDSITE, AFFECTEDASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "AreasAffected that involved the current Asset.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, AFFECTEDASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "DEFAULTREPFACSITEID, ANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "DEFAULTREPFACSITEID, PARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ANCESTOR",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Asset that is the ancestor (top of the asset hierarchy) to the current Asset.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, PARENT",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Asset that is the parent to the current Asset.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETANCESTOR",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "List of the asset and its descendants.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETANCESTOR",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "List of the asset and its ancestors.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Historical records (AssetFeaSpecHist) of the current Asset''s AssetFeaSpec records. (Linear)",
            "longDescription": null
        },
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
            "objectName": "ASSET",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Current Asset''s AssetFeatureSpec records. (Linear)",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETHIERARCHY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Current Asset''s AssetHierarchy records. Shows the work orders and parent asset at the time of each work order for the current Asset.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETHIERARCHY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, PARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "AssetHierarchy records on which the current asset is a parent. Shows the work orders and child asset at the time of each work order for the current Asset.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "AssetHistory records for the current Asset. Shows cost information for each work order to which the Asset belongs.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETLOCCOMM",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Current Asset''s AssetLocComm records. Shows the service groups to which this Asset belongs.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, SOURCEASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "AssetLocRelation records on which the current Asset is source of the linear relationship. (Linear)",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, TARGETASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "AssetLocRelation records on which the current Asset is target of the linear relationship. (Linear)",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, SOURCEASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Historical record (AssetLocRelHist) of the current Asset''s involvement as a source in linear relationships. (Linear)",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, TARGETASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Historical record (AssetLocRelHist) of the current Asset''s involvement as a target in linear relationships. (Linear)",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETLOCUSERCUST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Current Asset''s AssetLocUserCust records.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETMETER",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Current Asset''s AssetMeter records. The meters on the asset.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETMNTSKD",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETOPSKD",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETSPEC",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Current Asset''s AssetSpec records. The attributes associated with the Asset by virtue of its classification.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETSTATUS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 26",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, FROMPARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, TOPARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 28",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 29",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, FROMPARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 30",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, TOPARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 31",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 32",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, FROMPARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 33",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, TOPARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 34",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETUSERCUST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "All users and custodians for the current Asset.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSETWORKZONE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 39",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSET",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "WORKSITEID, ASSET",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 37",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "CI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ASSETLOCSITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "All CIs (configuration items) for the current Asset.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "COLLECTDETAILS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CollectDetails for the current Asset.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "NEXTASSETSITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "NEXTASSETSITEID, NEXTASSET",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "The asset to which the depreciation schedules were swapped to",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "NEXTASSETSITEID, PREVIOUSASSET",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "NEXTASSETSITEID, SWAPPEDTOASSET",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 53",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "PREVIOUSASSETSITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "PREVIOUSASSETSITEID, NEXTASSET",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 48",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "PREVIOUSASSETSITEID, PREVIOUSASSET",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "The asset to which the depreciation schedule was previously attached",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "PREVIOUSASSETSITEID, SWAPPEDTOASSET",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 54",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "The asset assigned to the depreciation schedule",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, NEXTASSET",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 49",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, PREVIOUSASSET",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 52",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, SWAPPEDTOASSET",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "DEPTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The asset assigned to the depreciation schedule",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "FAILUREREPORT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Reports for an asset.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INCIDENT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ASSETSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INCIDENT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ORIGRECSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INCIDENT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 43",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 46",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, LEASEASSET",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 47",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVOICELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, LEASEASSET",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 48",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 49",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "STORELOCSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, NEWASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 52",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, ROTASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 53",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "PRSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 54",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "PRSITEID, NEWASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "PRSITEID, ROTASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 56",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset for which materials were issued.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, NEWASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 58",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ROTASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Rotating Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 60",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, NEWASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "New Rotating Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, ROTASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 62",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, NEWASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Newly added Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ROTASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Rotating Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "JPASSETSPLINK",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 65",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "KPIOEE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 66",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "LABTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 67",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "LNRRECALIB",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 68",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "LNRRECALIB",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, SOURCEASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 69",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "LNRRECALIB",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, TARGETASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 70",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "LNRRECALIBNONAF",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 71",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "LOCATIONUSERCUST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 72",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "LOCKOUT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 73",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "FROMSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 74",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "FROMSITEID, ROTASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 75",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 76",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, ROTASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 77",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ROTASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Rotating Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ROTASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Rotating Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 82",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, ROTASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 83",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MEASUREMENT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measurements for Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MEASUREPOINT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MeasurePoints for the current Asset.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "METERREADING",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MeterReading records for the current Asset. This relationship will return the readings for all this Asset''s meters.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "METERREADING",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, INHERITEDFROMASSET",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MeterReading records on other assets that were inherited from the current Asset during meter reading rolldown.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MR",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 88",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 89",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "STORELOCSITE, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 90",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "MOVETOSITE, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Moved Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "MOVETOSITE, MOVETOPARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Move to Parent",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "MOVETOSITE, NEWASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "New Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "MOVETOSITE, NEWREPLACEASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 94",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "MOVETOSITE, REPLACEASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 95",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "REPLACEMENTSITE, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 96",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "REPLACEMENTSITE, MOVETOPARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 97",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "REPLACEMENTSITE, NEWASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 98",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "REPLACEMENTSITE, NEWREPLACEASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "New Replacement Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "REPLACEMENTSITE, REPLACEASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Replacement Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, MOVETOPARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 102",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, NEWASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 103",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, NEWREPLACEASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 104",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, REPLACEASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 105",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "WORKSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 106",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "WORKSITEID, MOVETOPARENT",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 107",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "WORKSITEID, NEWASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 108",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "WORKSITEID, NEWREPLACEASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 109",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "WORKSITEID, REPLACEASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 110",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "MULTIASSETLOCCIPR",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 111",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "NAMEDUSERS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 112",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PLUSCASSETSTATUS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PLUSCDSASSETLINK",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 114",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PLUSCJPDATASHEET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 115",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PLUSCSPOTCHECK",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 116",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PLUSCSPOTCHECK",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, STDASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 117",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PLUSCTPASSET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 118",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PLUSCTPHISTORY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 119",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PLUSCWODS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 120",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PLUSCWODSINSTR",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 121",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PM",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM''s Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PM",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "STORELOCSITE, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 123",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PMMETER",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 124",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 125",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "TOSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 126",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 127",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset to charge costs.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PROBLEM",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ASSETSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 129",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PROBLEM",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ORIGRECSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 130",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PROBLEM",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 131",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 132",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "STORELOCSITE, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 133",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "RFQLINE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 134",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ASSETLOCSITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Stop",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 136",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SAFETYLEXICON",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 137",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "FROMSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 138",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "POSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 139",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 140",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SKDACTIVITYQBE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Activity QBE Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SKDPROJECTASSTS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Project Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SLAASSETLOC",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 142",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SPAREPART",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 143",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SPRELATEDASSET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 144",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SPRELATEDASSET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, RELATEDASSET",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 145",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SPWORKASSET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, WORKASSET",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 146",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SR",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ASSETSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 147",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SR",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ORIGRECSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 148",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "SR",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 149",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TAGOUT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 150",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TICKET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ASSETSITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset on Ticket",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TICKET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ORIGRECSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 152",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TICKET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset on Ticket",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TLOAMASSETCONTRACT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 154",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TLOAMASSETGRP",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 155",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ROTASSETSITE, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 156",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ROTASSETSITE, ROTASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 157",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 158",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ROTASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 159",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "UNASSIGNEDWORKVIEW",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 178",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "REPFACSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 160",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "REPFACSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 162",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset for Activity",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WOASSETUSERCUST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "REPFACSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 165",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset for Change",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WOCONTRACT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSET",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 167",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WOCONTRACT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset covered by contract work.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WOGEN",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 169",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WOLOCKOUT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Assets to Lock-out for Work",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WOLOCUSERCUST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "REPFACSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 172",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset on Release",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "REPFACSITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 174",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Work Order Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WOSAFETYLINK",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 176",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WOTAGLOCK",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset related Tag-Locks",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WOTAGOUT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 177",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "DEFAULTREPFACSITEID, ANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "DEFAULTREPFACSITEID, PARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ANCESTOR",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Asset that is the ancestor (top of the asset hierarchy) to the current Asset.",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, PARENT",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Asset that is the parent to the current Asset.",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "ASSET",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Calendar",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ASSET",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "ASSET",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Asset",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "ASSET",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, PLUSCVENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calibration Vendor on Asset",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "ASSET",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Asset",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "ASSET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "ASSET",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "ASSET",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "ASSET",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LINEARREFMETHOD",
            "targetObject": "ASSET",
            "parentKeys": "LRM",
            "targetKeys": "LRM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "All linear Asset records using the current LinearRefMethod. (Linear)",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "DEFAULTREPFACSITEID, DEFAULTREPFAC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Repair Facility",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "DEFAULTREPFACSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "DEFAULTREPFACSITEID, PLUSCLPLOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, DEFAULTREPFAC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location of the Asset",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, PLUSCLPLOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "METERGROUP",
            "targetObject": "ASSET",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "All Asset records using the current MeterGroup.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSET",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSET",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SERVICEADDRESS",
            "targetObject": "ASSET",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SADDRESSCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Service Address",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ASSET",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "ASSET",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Shift",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSET",
            "parentKeys": "SITEID",
            "targetKeys": "DEFAULTREPFACSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSET",
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
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENT",
            "required": false,
            "persistent": true,
            "title": "Parent",
            "remarks": "Parent Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SERIALNUM",
            "required": false,
            "persistent": true,
            "title": "Serial #",
            "remarks": "Asset Serial Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETTAG",
            "required": false,
            "persistent": true,
            "title": "Asset Tag",
            "remarks": "Asset Tag Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Asset Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the asset. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Manufacturer-Vendor Code",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "FAILURECODE",
            "required": false,
            "persistent": true,
            "title": "Failure Class",
            "remarks": "Indicates Top Level Failure Hierarchy",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer Number",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "PURCHASEPRICE",
            "required": true,
            "persistent": true,
            "title": "Purchase Price",
            "remarks": "Purchase Price",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPLACECOST",
            "required": true,
            "persistent": true,
            "title": "Replacement Cost",
            "remarks": "Replacement Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTALLDATE",
            "required": false,
            "persistent": true,
            "title": "Installation Date",
            "remarks": "Installation Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WARRANTYEXPDATE",
            "required": false,
            "persistent": true,
            "title": "Warranty Expiration Date",
            "remarks": "Warranty Expiration Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALCOST",
            "required": true,
            "persistent": true,
            "title": "Total Cost",
            "remarks": "Total Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "YTDCOST",
            "required": true,
            "persistent": true,
            "title": "YTD Cost",
            "remarks": "Year To Date Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUDGETCOST",
            "required": true,
            "persistent": true,
            "title": "Budgeted",
            "remarks": "Budgeted Cost Of Work For The Year",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALNUM",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Calendar Code",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "ISRUNNING",
            "required": true,
            "persistent": true,
            "title": "Asset Up",
            "remarks": "Asset Status (Running-Not Running)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Rotating Item",
            "remarks": "Inventory Item Number",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "UNCHARGEDCOST",
            "required": true,
            "persistent": true,
            "title": "Uncharged Cost",
            "remarks": "Uncharged Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTUNCHARGEDCOST",
            "required": true,
            "persistent": true,
            "title": "Total Uncharged Cost",
            "remarks": "Uncharged Cost Total",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTDOWNTIME",
            "required": true,
            "persistent": true,
            "title": "Total Downtime",
            "remarks": "Total Downtime",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Last Changed Date",
            "remarks": "Asset Status Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Last Modified Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Last Modified By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "EQ1",
            "required": false,
            "persistent": true,
            "title": "Eq1",
            "remarks": "Asset Extra Field #1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EQ2",
            "required": false,
            "persistent": true,
            "title": "Eq2",
            "remarks": "Asset Extra Field #2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EQ3",
            "required": false,
            "persistent": true,
            "title": "Eq3",
            "remarks": "Asset Extra Field #3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EQ4",
            "required": false,
            "persistent": true,
            "title": "Eq4",
            "remarks": "Asset Extra Field #4",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EQ5",
            "required": false,
            "persistent": true,
            "title": "Eq5",
            "remarks": "Asset Extra Field #5",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EQ6",
            "required": false,
            "persistent": true,
            "title": "Eq6",
            "remarks": "Asset Extra Field #6",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EQ7",
            "required": false,
            "persistent": true,
            "title": "Eq7",
            "remarks": "Asset Extra Field #7",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EQ8",
            "required": false,
            "persistent": true,
            "title": "Eq8",
            "remarks": "Asset Extra Field #8",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EQ9",
            "required": false,
            "persistent": true,
            "title": "Eq9",
            "remarks": "Asset Extra Field #9",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EQ10",
            "required": false,
            "persistent": true,
            "title": "Eq10",
            "remarks": "Asset Extra Field #10",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EQ11",
            "required": false,
            "persistent": true,
            "title": "Eq11",
            "remarks": "Asset Extra Field #11",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EQ12",
            "required": false,
            "persistent": true,
            "title": "Eq12",
            "remarks": "Asset Extra Field #12",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EQ23",
            "required": false,
            "persistent": true,
            "title": "Eq23",
            "remarks": "Asset Extra Field #23",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EQ24",
            "required": false,
            "persistent": true,
            "title": "Eq24",
            "remarks": "Asset Extra Field #24",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIORITY",
            "required": false,
            "persistent": true,
            "title": "Priority",
            "remarks": "Asset Priority - copied to Work Order when entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVCOST",
            "required": true,
            "persistent": true,
            "title": "Inventory Cost",
            "remarks": "Cost on WO or PO Line items flagged as CHARGESTORE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "GL Account",
            "remarks": "GL Account Code for the Asset",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROTSUSPACCT",
            "required": false,
            "persistent": true,
            "title": "Rotating Suspense Account",
            "remarks": "Rotating Repairs Suspense Account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHILDREN",
            "required": true,
            "persistent": true,
            "title": "Children",
            "remarks": "Has children",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BINNUM",
            "required": false,
            "persistent": true,
            "title": "Bin",
            "remarks": "Bin Number (Rotable Asset).",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "DISABLED",
            "required": true,
            "persistent": true,
            "title": "Disabled",
            "remarks": "Is this record active?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Class Structure Identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "AUTOWOGEN",
            "required": true,
            "persistent": true,
            "title": "Automatically Generate Work Orders",
            "remarks": "Flag that indicates whether to start the wogen process when meter frequency is reached for an asset",
            "sameAsAttribute": "ISRUNNING",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Set identifier for the item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Asset Short Description (One Line)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDTOSTORE",
            "required": true,
            "persistent": false,
            "title": "Add to Store",
            "remarks": "Add to store?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": false,
            "title": "GL Credit Account",
            "remarks": "GLCREDITACCT",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": false,
            "title": "GL Debit Account",
            "remarks": "GLDEBITACCT",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MOVEDATE",
            "required": false,
            "persistent": false,
            "title": "Changed Date",
            "remarks": "MOVEDATE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MOVEDBY",
            "required": false,
            "persistent": false,
            "title": "Changed By",
            "remarks": "MOVEDBY",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MOVEMEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "MOVEMEMO",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MOVEMODIFYBINNUM",
            "required": false,
            "persistent": false,
            "title": "Bin",
            "remarks": "MOVEMODIFYBINNUM",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "NEWPARENT",
            "required": false,
            "persistent": false,
            "title": "To Parent",
            "remarks": "NEWPARENT",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "NEWSITE",
            "required": false,
            "persistent": false,
            "title": "To Site",
            "remarks": "NEWSITE",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "NEWLOCATION",
            "required": false,
            "persistent": false,
            "title": "To Location",
            "remarks": "NEWLOCATION",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "The item condition of the asset",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "GROUPNAME",
            "required": false,
            "persistent": true,
            "title": "Meter Group",
            "remarks": "All meters belonging to this asset's metergroup are automatically associated with this Asset in the AssetMeter object. Additions to the meter group may also be added to this Asset's AssetMeters.",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "METERGROUP"
        },
        {
            "attributeName": "FROMCONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "From Condition Code",
            "remarks": "The condition of the asset before move",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "ASSETTYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "The predefined type of this asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USAGE",
            "required": false,
            "persistent": true,
            "title": "Usage",
            "remarks": "Usage",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the asset, for example, not ready, operating, or decommissioned.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAINTHIERCHY",
            "required": true,
            "persistent": true,
            "title": "Maintain Hierarchy",
            "remarks": "Maintain Hierarchy",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETID",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "unique id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MOVED",
            "required": true,
            "persistent": true,
            "title": "Moved",
            "remarks": "flag indicates active or moved",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWASSETNUM",
            "required": false,
            "persistent": false,
            "title": "New Asset Number",
            "remarks": "New Asset Num",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "NEWDEPARTMENT",
            "required": false,
            "persistent": false,
            "title": "New Department",
            "remarks": "New Department",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "workorder number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Task ID",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "REFWO",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Ref WO",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASSETUID",
            "required": true,
            "persistent": true,
            "title": "ASSETUID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWSTATUS",
            "required": false,
            "persistent": false,
            "title": "New Status",
            "remarks": "New Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "HASCHILDREN",
            "required": true,
            "persistent": false,
            "title": "Has Children",
            "remarks": "Does this asset have children?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASPARENT",
            "required": true,
            "persistent": false,
            "title": "Has Parent",
            "remarks": "Does this asset belong to a parent asset?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object",
            "remarks": "The name of the table",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "NP_STATUSMEMO",
            "required": false,
            "persistent": false,
            "title": "Change Status Memo",
            "remarks": "Status change memo, temporary non-persistent field used by MEA",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "TOOLRATE",
            "required": false,
            "persistent": true,
            "title": "Tool Rate",
            "remarks": "Tool Rate",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMTYPE",
            "required": false,
            "persistent": true,
            "title": "Item Type",
            "remarks": "Item Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ANCESTOR",
            "required": false,
            "persistent": true,
            "title": "Ancestor",
            "remarks": "Root Parent",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "REPLACEASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Replacing Asset",
            "remarks": "Replace Asset",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "REPLACEASSETSITE",
            "required": false,
            "persistent": false,
            "title": "Replacing Asset's Site",
            "remarks": "Replace Asset Site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "NEWREPLACEASSETNUM",
            "required": false,
            "persistent": false,
            "title": "New Replacing Asset Number",
            "remarks": "New Replace AssetNum",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIFTNUM",
            "required": false,
            "persistent": true,
            "title": "Shift",
            "remarks": "Shift of the calendar",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "TOOLCONTROLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "Control Account",
            "remarks": "Control Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIRECTION",
            "required": false,
            "persistent": true,
            "title": "Direction",
            "remarks": "Direction of this linear asset, for example North, South, East or West",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTMEASURE",
            "required": false,
            "persistent": true,
            "title": "Start Measure",
            "remarks": "A value that identifies the start of the linear asset.  The absolute value of the end measure minus the start measure will determine the length of the linear asset.  The start measure and the end measure also determine the boundary measures for any features or relationships applied to the asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDMEASURE",
            "required": false,
            "persistent": true,
            "title": "End Measure",
            "remarks": "A value that identifies the end of the linear asset.  The absolute value of the end measure minus the start measure will determine the length of the linear asset.  The start measure and the end measure also determine the boundary measures for any features or relationships applied to the asset.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ISLINEAR",
            "required": true,
            "persistent": true,
            "title": "Linear",
            "remarks": "When checked, identifies an asset as a linear asset (e.g. road, railway).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Asset End",
            "remarks": "Free-form text describing the end of this linear asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Asset Start",
            "remarks": "Free-form text describing the start of this linear asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": false,
            "title": "Has Status Changed",
            "remarks": "Non persistent boolean field to indicate whether the status has been changed after the stateful object is fetched from the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HIERARCHYPATH",
            "required": false,
            "persistent": false,
            "title": "Hierarchy Path",
            "remarks": "Sets value to HIERARCHYPATH, if the asset has an associated CLASSSTRUCTURE record",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "ASOFDATE",
            "required": false,
            "persistent": false,
            "title": "As of",
            "remarks": "Displays the relationships that existed with the current asset as of the date specified",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MULTIID",
            "required": false,
            "persistent": false,
            "title": "MULTI ID",
            "remarks": "MultiAssetLocCI unique identifier",
            "sameAsAttribute": "MULTIID",
            "sameAsObject": "MULTIASSETLOCCI"
        },
        {
            "attributeName": "FROMMEASURE",
            "required": false,
            "persistent": false,
            "title": "From",
            "remarks": "non-persistent linear attribute used to filter features/attributes/relationships.  Value defaults to the lesser of the asset's start or end measure.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TOMEASURE",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "non-persistent linear attribute used to filter features/attributes/relationships.  Value defaults to the greater of the asset's start or end measure.",
            "sameAsAttribute": "STARTMEASURE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "CINUM",
            "required": false,
            "persistent": false,
            "title": "Configuration Item",
            "remarks": "Configuration Item",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "LRM",
            "required": false,
            "persistent": true,
            "title": "LRM",
            "remarks": "The Linear Referencing Method for this asset.  Defined using the Add/Modify Linear Referencing Methods Action, an LRM is a means for locating any point (e.g. feature, relationship, work) along the linear asset using a measure and a known point.  Changing the LRM is not recommended unless the base unit of measure is the same in the new LRM.",
            "sameAsAttribute": "LRM",
            "sameAsObject": "LINEARREFMETHOD"
        },
        {
            "attributeName": "STARTDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Start Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for End Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROLLTOALLCHILDREN",
            "required": false,
            "persistent": false,
            "title": "Roll New Status to All Child Assets",
            "remarks": "Roll New Status to All Child Assets",
            "sameAsAttribute": "ROLLTOALLCHILDREN",
            "sameAsObject": "ASCHANGESTATUS"
        },
        {
            "attributeName": "REMOVEFROMACTIVEROUTES",
            "required": false,
            "persistent": false,
            "title": "Remove Asset Reference from Active Routes",
            "remarks": "Remove Asset Reference from Active Routes",
            "sameAsAttribute": "REMOVEFROMACTIVEROUTES",
            "sameAsObject": "ASCHANGESTATUS"
        },
        {
            "attributeName": "REMOVEFROMACTIVESP",
            "required": false,
            "persistent": false,
            "title": "Remove Asset Reference from Active Safety Plans",
            "remarks": "Remove Asset Reference from Active Safety Plans",
            "sameAsAttribute": "REMOVEFROMACTIVESP",
            "sameAsObject": "ASCHANGESTATUS"
        },
        {
            "attributeName": "CHANGEPMSTATUS",
            "required": false,
            "persistent": false,
            "title": "Change the Status of All Associated PMs to Inactive",
            "remarks": "Change the Status of All Associated PMs to Inactive",
            "sameAsAttribute": "CHANGEPMSTATUS",
            "sameAsObject": "ASCHANGESTATUS"
        },
        {
            "attributeName": "DEFAULTREPFACSITEID",
            "required": false,
            "persistent": true,
            "title": "Repair Facility Site",
            "remarks": "The site for the repair facility.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DEFAULTREPFAC",
            "required": false,
            "persistent": true,
            "title": "Default Repair Facility",
            "remarks": "The default repair facility that is assigned to work orders generated for PMs and Condition Monitoring. The repair facility can be changed during the manual work order generation process.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "NEWORGID",
            "required": false,
            "persistent": false,
            "title": "To Organization",
            "remarks": "To Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "RETURNEDTOVENDOR",
            "required": true,
            "persistent": true,
            "title": "Returned To Vendor",
            "remarks": "Indicates whether the current asset was returned to the responsible vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATIONSHIPFILTERBY",
            "required": false,
            "persistent": false,
            "title": "Relationship Filter By",
            "remarks": "Relationship Filter By (VIEWALL, SOURCE, TARGET)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMNEWGLACCOUNT",
            "required": false,
            "persistent": false,
            "title": "To GL Account",
            "remarks": "Move to GL Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMHASH",
            "required": false,
            "persistent": true,
            "title": "Partition ID",
            "remarks": "The unique ID which is used to identify a partition from a discovery perspective.  This field can be used by reconciliation to link and audit authorized partitions.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMPARTITION",
            "required": true,
            "persistent": true,
            "title": "Partition",
            "remarks": "Is this asset a partition?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCASSETDEPT",
            "required": false,
            "persistent": true,
            "title": "Asset Department",
            "remarks": "Enter an asset department or click Select Value and choose one from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCCLASS",
            "required": false,
            "persistent": true,
            "title": "Class",
            "remarks": "Enter a value or click Select Value and choose an asset classification of the tool.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCDUEDATE",
            "required": false,
            "persistent": true,
            "title": "Calibration Due Date",
            "remarks": "The date that the next 'Cal' work type PM will be generated",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCDUEDATE_NP",
            "required": false,
            "persistent": false,
            "title": "Calibration Due Date",
            "remarks": "The date when the calibration of the asset is due.",
            "sameAsAttribute": "PLUSCDUEDATE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCISCONDESC",
            "required": false,
            "persistent": true,
            "title": "Is Contaminated Description",
            "remarks": "This field is available when the Is Contaminated? Field is selected. It is used to enter a description of the contamination or other pertinent information.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCISCONTAM",
            "required": true,
            "persistent": true,
            "title": "Is Contaminated",
            "remarks": "When selected, indicates that this tool is contaminated and allows you to enter a description of the contamination. The default is this field is cleared.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCISINHOUSECAL",
            "required": true,
            "persistent": true,
            "title": "Internal Calibration",
            "remarks": "When selected indicates that this tool is calibrated in house. The default is cleared.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCISMTE",
            "required": true,
            "persistent": true,
            "title": "Is M&TE",
            "remarks": "When selected, indicates that the selected equipment is a piece of measurement and test equipment. The default for this check box is cleared (not M&TE).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCISMTECLASS",
            "required": false,
            "persistent": true,
            "title": "M&TE Classification",
            "remarks": "If the Is (M&TE) checkbox is selected, specify the classification for tool.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCLOOPNUM",
            "required": false,
            "persistent": true,
            "title": "Loop Number",
            "remarks": "Enter the loop number of the asset, if applicable.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCMODELNUM",
            "required": false,
            "persistent": true,
            "title": "Model Number",
            "remarks": "Enter the model number of the tool, if applicable. This field may be populated from the Assets (Cal) application.",
            "sameAsAttribute": "MODELNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "PLUSCOPRGEEU",
            "required": false,
            "persistent": true,
            "title": "Units",
            "remarks": "Enter the engineering units for the Operating Range values or click Select Value and choose the units from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCOPRGEFROM",
            "required": false,
            "persistent": true,
            "title": "Operating Range From",
            "remarks": "Enter the minimum numeric value of the operating range of the tool. This field is used in conjuction with the Operating Range To field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCOPRGETO",
            "required": false,
            "persistent": true,
            "title": "To",
            "remarks": "Enter the maximum numeric value of the operating range of the tool. This field is used in conjuction with the Operating Range From field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCPHYLOC",
            "required": false,
            "persistent": true,
            "title": "Physical Location",
            "remarks": "Actual physical location of the asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCPMEXTDATE",
            "required": true,
            "persistent": true,
            "title": "Extend Date",
            "remarks": "This check box is selected if the date of the associated PM is extended.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCSOLUTION",
            "required": true,
            "persistent": true,
            "title": "Buffer Solution Flag",
            "remarks": "Buffer Solution Flag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCSUMDIR",
            "required": false,
            "persistent": true,
            "title": "Applied As",
            "remarks": "Enter the direction of the accuracy fields (%Span, %URV, and %Reading). Valid entries are  +, -, and +/-.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCSUMEU",
            "required": false,
            "persistent": true,
            "title": "Accuracy EU",
            "remarks": "This field is summed with the %Span, %URV, and %Reading EU fields to obtain the total accuracy of the asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCSUMREAD",
            "required": false,
            "persistent": true,
            "title": "% READING",
            "remarks": "This field is summed with the %Span, %URV, and Accuracy EU fields to obtain the total accuracy of the asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCSUMSPAN",
            "required": false,
            "persistent": true,
            "title": "%SPAN",
            "remarks": "This field is summed with the %Reading, %URV, and Accuracy EU fields to obtain the total accuracy of the asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCSUMURV",
            "required": false,
            "persistent": true,
            "title": "%URV",
            "remarks": "This field is summed with the %Span, %Reading, and Accuracy EU fields to obtain the total accuracy of the asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCVENDOR",
            "required": false,
            "persistent": true,
            "title": "Calibration Vendor",
            "remarks": "Vendor/Facility that does the actual calibration.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "ISCALIBRATION",
            "required": true,
            "persistent": true,
            "title": "Calibration",
            "remarks": "Determines whether an asset is calibrated. If you select this checkbox, the calibration details are available. Specify the calibration details for the asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPLATEID",
            "required": false,
            "persistent": true,
            "title": "Asset Template",
            "remarks": "Identifies the asset template. Enter a value to identify a new asset template. This value must be unique for all asset templates.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCISCONDESC_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Is Contaminated Description Long description",
            "remarks": "Long Description for Is Contaminated Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCPHYLOC_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Physical Location Long description",
            "remarks": "Long Description for Physical Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCLPLOC",
            "required": false,
            "persistent": true,
            "title": "Loop Location",
            "remarks": "Defines the location number of the associated Loop Calibration record. To modify a loop location, click Move/Modify Assets or from the Select Action menu, select Move/Modify Assets.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "PLUSCNEWLPLOC",
            "required": false,
            "persistent": false,
            "title": "To Loop Location",
            "remarks": "Defines the location number that the Loop Calibration record is moving to. Click Detail Menu to select the value.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "PLUSCSUMEU_NP",
            "required": false,
            "persistent": false,
            "title": "Accuracy EU",
            "remarks": "This field is summed with the %Span, %URV, and %Reading EU fields to obtain the total accuracy of the asset.",
            "sameAsAttribute": "PLUSCSUMEU",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCSUMSPAN_NP",
            "required": false,
            "persistent": false,
            "title": "%SPAN",
            "remarks": "This field is summed with the %Reading, %URV, and Accuracy EU fields to obtain the total accuracy of the asset.",
            "sameAsAttribute": "PLUSCSUMSPAN",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCSUMURV_NP",
            "required": false,
            "persistent": false,
            "title": "%URV",
            "remarks": "This field is summed with the %Span, %Reading, and Accuracy EU fields to obtain the total accuracy of the asset.",
            "sameAsAttribute": "PLUSCSUMURV",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCSUMREAD_NP",
            "required": false,
            "persistent": false,
            "title": "% READING",
            "remarks": "This field is summed with the %Span, %URV, and Accuracy EU fields to obtain the total accuracy of the asset.",
            "sameAsAttribute": "PLUSCSUMREAD",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCOPRGEFROM_NP",
            "required": false,
            "persistent": false,
            "title": "Operating Range From",
            "remarks": "Enter the minimum numeric value of the operating range of the tool. This field is used in conjuction with the Operating Range To field.",
            "sameAsAttribute": "PLUSCOPRGEFROM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCOPRGETO_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "Enter the maximum numeric value of the operating range of the tool. This field is used in conjuction with the Operating Range From field.",
            "sameAsAttribute": "PLUSCOPRGETO",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "The start date for the date range of the assigned work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "The end date for the date range of the assigned work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPRECIATIONPENDING",
            "required": false,
            "persistent": true,
            "title": "Depreciation Pending",
            "remarks": "Indicates that generation of the depreciation schedules is pending final receipt or invoice of the PO this rotating asset was purchased on",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPTARGETASSET",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Target Asset.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "DEPTARGETASSETSITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "ID of the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "SHOWFROMDATE",
            "required": false,
            "persistent": false,
            "title": "From",
            "remarks": "The date from which the operational/maintenance schedule records are displayed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SADDRESSCODE",
            "required": false,
            "persistent": true,
            "title": "Service Address",
            "remarks": "The address code identifies a service address. It must be unique by site for each service address.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "NPADDRESSCODE",
            "required": false,
            "persistent": false,
            "title": "Address Code",
            "remarks": "Non-persistent attribute for Address Code",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "NPADDRESSDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Non-persistent attribute for Address Code Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "SALOCATION",
            "required": false,
            "persistent": false,
            "title": "Ancestor Location",
            "remarks": "Location that contains the Service Address information.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SALOCATIONDESC",
            "required": false,
            "persistent": false,
            "title": "Ancestor Location Description",
            "remarks": "Location description that contains the Service Address information.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SALOCATIONSACODE",
            "required": false,
            "persistent": false,
            "title": "Service Address Address Code",
            "remarks": "Service Address of the ancestor location",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "SALOCATIONSADESC",
            "required": false,
            "persistent": false,
            "title": "Service Address Description",
            "remarks": "Service Address description of the ancestor location",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "NPADDRESSDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "The end date for the date range of the assigned work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWSTARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "The start date for the date range of the assigned work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREWTOOL",
            "target": "AMCREWTOOL",
            "remarks": "Relationship to the AMCREWASSET table, used to find crews where this asset is assigned to.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ASCHANGESTATUS",
            "target": "ASCHANGESTATUS",
            "remarks": "Relationship to the non-persistent AssetChangeStatus table. The resulting set will contain zero or more objects. Note : AssetChangeStatus is a non-persistent MBO with whose help the dialog box binds with the object.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET_ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the asset records, used to find the asset records in a given site.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET_PARENT",
            "target": "ASSET",
            "remarks": null,
            "whereClause": "assetnum=:parent and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETCHILDREN",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find children for a given asset. (asset.assetnum = asset.parent and asset.siteid = asset.siteid). This resulting set will contain zero or more objects.",
            "whereClause": "parent = :assetnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSITE",
            "target": "ASSET",
            "remarks": "Relationship to the asset records, used to find the asset records in a given site.",
            "whereClause": "assetnum=:assetnum and siteid=:newsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "target": "ASSET",
            "remarks": "Relationship to the asset records, used to find the children records for a asset.",
            "whereClause": "parent = :assetnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEPTARGETASSET",
            "target": "ASSET",
            "remarks": "Relationship to get the Target Asset",
            "whereClause": "orgid =:orgid and assetnum=:deptargetasset and siteid=:deptargetassetsiteid",
            "cardinality": null
        },
        {
            "name": "MOVEDASSET",
            "target": "ASSET",
            "remarks": "Relationship to the asset records, used to find whether the same asset exist in a given site(moved previously).",
            "whereClause": "assetid=:assetid and siteid=:newsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWASSETSITE",
            "target": "ASSET",
            "remarks": "Relationship to the asset records, used to find the asset records for a given assetnum and a given site.",
            "whereClause": "assetnum=:newassetnum and siteid=:newsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWPARENT",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table,used to find the asset object for the current object's parent (the parent the asset will have upon completion of the  move, and is a non-persistent attribute). (asset.assetnum = asset.newparent and asset.siteid = asset.newsite). The resulting set will contain one object.",
            "whereClause": "assetnum = :newparent and siteid = :newsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENT",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the parent for a given asset. (asset.assetnum = asset.parent). This resulting set will contain zero or one object.",
            "whereClause": "assetnum = :parent and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPLACEASSET",
            "target": "ASSET",
            "remarks": "Relationship to the asset records, used to find the replace asset.",
            "whereClause": "assetnum=:replaceassetnum and siteid=:replaceassetsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOESASSETANCESTOREXIST",
            "target": "ASSETANCESTOR",
            "remarks": "Relationship to the assetancestor records, used to see if this asset's proposed new parent is already a child of this asset. The result will be one or zero records.  (assetancestor.assetnum=asset.newparent and assetancestor.ancestor=asset.assetnum and assetancestor.siteid=asset.siteid)",
            "whereClause": "assetnum=:newparent and ancestor=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETANCESTOR",
            "target": "ASSETANCESTOR",
            "remarks": "Relationship to the assetancestor records, used to find the assetancestor records for a given asset.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURE",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the AssetFeature table, used to find all AssetFeatures for this Asset. (assetfeature.assetnum=asset.assetnum and assetfeature.siteid=asset.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and assetlocrelationuid is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURES",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the AssetFeature table, used to find all AssetFeatures for this Asset. (assetfeature.assetnum=asset.assetnum and assetfeature.siteid=asset.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURES_ALL",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the AssetFeature table used to find AssetFeatures for this Asset that fall within the range of the asset's FROMMEASURE and TOMEASURE.  The result includes those features that are on assets that have a relationship with this asset, have shared=1 and are parallel to this asset.  That is, this and the related asset have the sourcestartmeasure equal to targetstartmeasure and sourceendmeasure equal to targetendmeasure.  (assetfeature.assetnum=asset.assetnum and assetfeature.siteid=asset.siteid and (  (assetfeature.startmeasure >= asset.frommeasure and assetfeature.startmeasure <= asset.tomeasure) or (assetfeature.endmeasure >= asset.frommeasure and assetfeature.endmeasure <= asset.tomeasure) or (assetfeature.startmeasure <= asset.frommeasure and assetfeature.endmeasure >= asset.tomeasure) or (assetfeature.startmeasure >= asset.tomeasure and assetfeature.endmeasure <= asset.frommeasure)) or exists (select 1 from assetfeature af where af.shared=1 and af.siteid=asset.siteid  and af.assetnum!=asset.assetnum and af.assetfeatureid=assetfeature.assetfeatureid and exists (select 1 from assetlocrelation alr where alr.siteid=asset.siteid and alr.sourcestartmeasure=alr.targetstartmeasure and alr.sourceendmeasure=alr.targetendmeasure and (alr.sourceassetnum=af.assetnum and alr.targetassetnum=asset.assetnum or alr.targetassetnum=af.assetnum and alr.sourceassetnum=asset.assetnum) and (((alr.sourcestartmeasure <= af.startmeasure and alr.sourceendmeasure >= af.startmeasure) or (alr.sourcestartmeasure <= af.endmeasure and alr.sourceendmeasure >= af.endmeasure) or (alr.sourcestartmeasure >= af.startmeasure and alr.sourceendmeasure <= af.endmeasure) or (alr.sourcestartmeasure >= af.endmeasure and alr.sourceendmeasure <= af.startmeasure)) and ((af.startmeasure >= asset.frommeasure and af.startmeasure <= asset.tomeasure) or (af.endmeasure >= asset.frommeasure and af.endmeasure <= asset.tomeasure) or (af.startmeasure <= asset.frommeasure and af.endmeasure >= asset.tomeasure) or (af.startmeasure >= asset.tomeasure and af.endmeasure <= asset.frommeasure))))) ).  The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum  and siteid=:siteid and (  (startmeasure >= :frommeasure and startmeasure <= :tomeasure) or (endmeasure >= :frommeasure and endmeasure <= :tomeasure) or (startmeasure <= :frommeasure and endmeasure >= :tomeasure) or (startmeasure >= :tomeasure and endmeasure <= :frommeasure)) or exists (select 1 from assetfeature af where shared=1 and siteid=:siteid  and assetnum!=:assetnum and af.assetfeatureid=assetfeature.assetfeatureid and exists (select 1 from assetlocrelation alr where alr.siteid=:siteid and alr.sourcestartmeasure=alr.targetstartmeasure and alr.sourceendmeasure=alr.targetendmeasure and (alr.sourceassetnum=af.assetnum and alr.targetassetnum=:assetnum or alr.targetassetnum=af.assetnum and alr.sourceassetnum=:assetnum) and (((alr.sourcestartmeasure <= af.startmeasure and alr.sourceendmeasure >= af.startmeasure) or (alr.sourcestartmeasure <= af.endmeasure and alr.sourceendmeasure >= af.endmeasure) or (alr.sourcestartmeasure >= af.startmeasure and alr.sourceendmeasure <= af.endmeasure) or (alr.sourcestartmeasure >= af.endmeasure and alr.sourceendmeasure <= af.startmeasure)) and ((af.startmeasure >= :frommeasure and af.startmeasure <= :tomeasure) or (af.endmeasure >= :frommeasure and af.endmeasure <= :tomeasure) or (af.startmeasure <= :frommeasure and af.endmeasure >= :tomeasure) or (af.startmeasure >= :tomeasure and af.endmeasure <= :frommeasure)))))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURES_UNIONALL",
            "target": "ASSETFEATURE",
            "remarks": "Relationship to the AssetFeature table used to find AssetFeatures for this Asset that fall within the range of the asset's FROMMEASURE and TOMEASURE.  The result includes those features that are on assets that have a relationship with this asset, have shared=1 and are parallel to this asset.  That is, this and the related asset have the sourcestartmeasure equal to targetstartmeasure and sourceendmeasure equal to targetendmeasure.  (assetnum=asset.assetnum and siteid=asset.siteid and islinearref=1 and ((startmeasure >= asset.frommeasure and startmeasure <= asset.tomeasure) or (endmeasure >= asset.frommeasure and endmeasure <= asset.tomeasure) or (startmeasure <= asset.frommeasure and endmeasure >= asset.tomeasure) or (startmeasure >= asset.tomeasure and endmeasure <= asset.frommeasure)) union all (select * from assetfeature af where shared=1 and siteid=asset.siteid  and assetnum!=asset.assetnum and exists (select 1 from assetlocrelation alr where alr.siteid=asset.siteid and alr.sourcestartmeasure=alr.targetstartmeasure and alr.sourceendmeasure=alr.targetendmeasure and (alr.sourceassetnum=af.assetnum and alr.targetassetnum=asset.assetnum or alr.targetassetnum=af.assetnum and alr.sourceassetnum=asset.assetnum) and (((alr.sourcestartmeasure <= af.startmeasure and alr.sourceendmeasure >= af.startmeasure) or (alr.sourcestartmeasure <= af.endmeasure and alr.sourceendmeasure >= af.endmeasure) or (alr.sourcestartmeasure >= af.startmeasure and alr.sourceendmeasure <= af.endmeasure) or (alr.sourcestartmeasure >= af.endmeasure and alr.sourceendmeasure <= af.startmeasure)) and ((af.startmeasure >= asset.frommeasure and af.startmeasure <= asset.tomeasure) or (af.endmeasure >= asset.frommeasure and af.endmeasure <= asset.tomeasure) or (af.startmeasure <= asset.frommeasure and af.endmeasure >= asset.tomeasure) or (af.startmeasure >= asset.tomeasure and af.endmeasure <= asset.frommeasure)))))).  The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and islinearref=1 and ((startmeasure >= :frommeasure and startmeasure <= :tomeasure) or (endmeasure >= :frommeasure and endmeasure <= :tomeasure) or (startmeasure <= :frommeasure and endmeasure >= :tomeasure) or (startmeasure >= :tomeasure and endmeasure <= :frommeasure)) union all (select * from assetfeature af where shared=1 and siteid=:siteid  and assetnum!=:assetnum and exists (select 1 from assetlocrelation alr where alr.siteid=:siteid and alr.sourcestartmeasure=alr.targetstartmeasure and alr.sourceendmeasure=alr.targetendmeasure and (alr.sourceassetnum=af.assetnum and alr.targetassetnum=:assetnum or alr.targetassetnum=af.assetnum and alr.sourceassetnum=:assetnum) and (((alr.sourcestartmeasure <= af.startmeasure and alr.sourceendmeasure >= af.startmeasure) or (alr.sourcestartmeasure <= af.endmeasure and alr.sourceendmeasure >= af.endmeasure) or (alr.sourcestartmeasure >= af.startmeasure and alr.sourceendmeasure <= af.endmeasure) or (alr.sourcestartmeasure >= af.endmeasure and alr.sourceendmeasure <= af.startmeasure)) and ((af.startmeasure >= :frommeasure and af.startmeasure <= :tomeasure) or (af.endmeasure >= :frommeasure and af.endmeasure <= :tomeasure) or (af.startmeasure <= :frommeasure and af.endmeasure >= :tomeasure) or (af.startmeasure >= :tomeasure and af.endmeasure <= :frommeasure)))))",
            "cardinality": null
        },
        {
            "name": "VIEWASSETFEATUREHIST",
            "target": "ASSETFEATUREHIST",
            "remarks": "Relationship to the assetfeaturehist table, used to find the asset feature history records for a given asset. The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and ((removeddate is null and createddate<=:asofdate) or (removeddate is not null and :asofdate between createddate and removeddate)) and ((startmeasure >= :frommeasure and startmeasure <= :tomeasure) or (endmeasure >= :frommeasure and endmeasure <= :tomeasure) or (startmeasure <= :frommeasure and endmeasure >= :tomeasure) or (startmeasure >= :tomeasure and endmeasure <= :frommeasure))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFEATURESPECS",
            "target": "ASSETFEATURESPEC",
            "remarks": "Relationship from an asset to all of the feature specifications",
            "whereClause": "assetnum=:assetnum and ((startmeasure >= :frommeasure and startmeasure <= :tomeasure) or (endmeasure >= :frommeasure and endmeasure <= :tomeasure) or (startmeasure <= :frommeasure and endmeasure >= :tomeasure) or (startmeasure >= :tomeasure and endmeasure <= :frommeasure) or (startmeasure is null or endmeasure is null))",
            "cardinality": null
        },
        {
            "name": "ASSETHIERARCHY",
            "target": "ASSETHIERARCHY",
            "remarks": "Relationship to the AssetHierarchy table, used to find all asset in a hierarchy for a given asset. (assethierarchy.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSETHISTORY",
            "target": "ASSETHISTORY",
            "remarks": "Relationship to the AssetHistory table, used to find history records for a given asset. (assethistory.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSETISSUEITEMS",
            "target": "ASSETISSUEITEMS",
            "remarks": "User default site and storeroom",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMM",
            "target": "ASSETLOCCOMM",
            "remarks": "Relationship to the ASSETLOCCOMM table, used to find the ASSETLOCCOMMs for the asset. The resulting set will contain one or more objects.",
            "whereClause": "assetnum= :assetnum and siteid= :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCRELATION",
            "target": "ASSETLOCRELATION",
            "remarks": "Relationship to the ASSETLOCRELATION table, used to find related asset's for give Asset.",
            "whereClause": "sourceassetnum =:assetnum or targetassetnum =:assetnum and siteid =:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCRELATION_ALL",
            "target": "ASSETLOCRELATION",
            "remarks": "Relationship to the AssetLocRelation table used to find AssetLocRelationships for this Asset that fall within the range of the asset's FROMMEASURE and TOMEASURE.",
            "whereClause": "((sourceassetnum=:assetnum and ((sourcestartmeasure <= :frommeasure and sourceendmeasure >= :frommeasure) or (sourcestartmeasure <= :tomeasure and sourceendmeasure >= :tomeasure) or (sourcestartmeasure >= :frommeasure and sourceendmeasure <= :tomeasure) or (sourcestartmeasure >= :tomeasure and sourceendmeasure <= :frommeasure) or (sourcestartmeasure is null and sourceendmeasure is null))) or (targetassetnum=:assetnum and ((targetstartmeasure <= :frommeasure and targetendmeasure >= :frommeasure) or (targetstartmeasure <= :tomeasure and targetendmeasure >= :tomeasure) or (targetstartmeasure >= :frommeasure and targetendmeasure <= :tomeasure) or (targetstartmeasure >= :tomeasure and targetendmeasure <= :frommeasure) or (targetstartmeasure is null and targetendmeasure is null)))) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDASSET",
            "target": "ASSETLOCRELATION",
            "remarks": "For given asset, retrieve its all related assets, either as source or as target",
            "whereClause": "sourceassetnum=:assetnum or targetassetnum=:assetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETRELATIONHISTSOURCEASOF",
            "target": "ASSETLOCRELHIST",
            "remarks": "Relationship to the ASSETLOCRELHIST table, used to find sourceasset's for a given Asset with Asofdate.",
            "whereClause": "targetassetnum=:assetnum and ((removeddate is not null and :asofdate between createddate and removeddate) or (removeddate is null and createddate <=:asofdate)) and ((targetstartmeasure <= :frommeasure and targetendmeasure >= :frommeasure) or (targetstartmeasure <= :tomeasure and targetendmeasure >= :tomeasure) or (targetstartmeasure >= :frommeasure and targetendmeasure <= :tomeasure) or (targetstartmeasure >= :tomeasure and targetendmeasure <= :frommeasure) or (targetstartmeasure is null and targetendmeasure is null)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETRELATIONHISTTARGETASOF",
            "target": "ASSETLOCRELHIST",
            "remarks": "Relationship to the ASSETLOCRELHIST table, used to find targetassetnum's for a given Asset with Asof date.",
            "whereClause": "sourceassetnum=:assetnum and ((removeddate is not null and :asofdate between createddate and removeddate) or (removeddate is null and createddate <=:asofdate))  and ((sourcestartmeasure <= :frommeasure and sourceendmeasure >= :frommeasure) or (sourcestartmeasure <= :tomeasure and sourceendmeasure >= :tomeasure) or (sourcestartmeasure >= :frommeasure and sourceendmeasure <= :tomeasure) or (sourcestartmeasure >= :tomeasure and sourceendmeasure <= :frommeasure)  or (sourcestartmeasure is null and sourceendmeasure is null)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INT_ASSETMETER",
            "target": "ASSETMETER",
            "remarks": "Relationship to the AssetMeter table for INT table. The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETMETER",
            "target": "ASSETMETER",
            "remarks": "Relationship to the AssetMeter table, used to find all asset meters for the current asset. (assetmeter.assetnum = asset.assetnum). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSETMETERCONTINUOUS",
            "target": "ASSETMETER",
            "remarks": "Relationship to the AssetMeter object, used to find the asset meters for the current asset that have a CONTINUOUS meter type",
            "whereClause": "assetnum = :assetnum and siteid = :siteid and exists (select metername from meter where metername=assetmeter.metername and metertype in (select value from synonymdomain where maxvalue='CONTINUOUS' and domainid='METERTYPE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVEASSETMETER",
            "target": "ASSETMETER",
            "remarks": "Relationship to the AssetMeter table, used to find all active asset meters for the current asset. (assetmeter.active = :yes and assetmeter.assetnum = asset.assetnum). The resulting set will contain zero or more objects.",
            "whereClause": "active=:yes and assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSETMETER",
            "target": "ASSETMETER",
            "remarks": "Relationship to the AssetMeter table, used to find all asset meters between the linear asset's FROMMEASURE and TOMEASURE. (assetmeter.assetnum=asset.assetnum and assetmeter.siteid=asset.siteid and ((assetmeter.startmeasure >= asset.frommeasure and assetmeter.startmeasure <= asset.tomeasure) or (assetmeter.endmeasure >= asset.frommeasure and assetmeter.endmeasure <= asset.tomeasure) or (assetmeter.startmeasure <= asset.frommeasure and assetmeter.endmeasure >= asset.tomeasure) or (assetmeter.startmeasure >= asset.tomeasure and assetmeter.endmeasure <= asset.frommeasure)) ). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and ((assetmeter.startmeasure >= :frommeasure and assetmeter.startmeasure <= :tomeasure) or (assetmeter.endmeasure >= :frommeasure and assetmeter.endmeasure <= :tomeasure) or (assetmeter.startmeasure <= :frommeasure and assetmeter.endmeasure >= :tomeasure) or (assetmeter.startmeasure >= :tomeasure and assetmeter.endmeasure <= :frommeasure) or(assetmeter.startmeasure is null or assetmeter.endmeasure is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETMNTSKD",
            "target": "ASSETMNTSKD",
            "remarks": "Relationship to assetmntskd table, used to find all the asset maintenance schedule dates for a asset.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "ASSETMOVEDFLT",
            "target": "ASSETMOVEDFLT",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETOPSKD",
            "target": "ASSETOPSKD",
            "remarks": "Relationship to assetopskd table, used to find all the asset operational schedule dates for a asset.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "ASSETSPEC",
            "target": "ASSETSPEC",
            "remarks": "Relationship to the AssetSpec table, used to find all specifications for a given asset. (assetspec.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSETSPECCLASS",
            "target": "ASSETSPEC",
            "remarks": "Relationship to the AssetSpec table, used to find all asset specifications for the asset.  If the asset a linear asset, it finds all asset specifications between the linear asset's FROMMEASURE and TOMEASURE. FROMMEASURE and TOMEASURE do not apply to non-linear assets.  (assetspec.assetnum=asset.assetnum and assetspec.siteid=asset.siteid and ((assetspec.startmeasure >= asset.frommeasure and assetspec.startmeasure <= asset.tomeasure) or (assetspec.endmeasure >= asset.frommeasure and assetspec.endmeasure <= asset.tomeasure) or (assetspec.startmeasure <= asset.frommeasure and assetspec.endmeasure >= asset.tomeasure) or (assetspec.startmeasure >= asset.tomeasure and assetspec.endmeasure <= asset.frommeasure) or (assetspec.startmeasure is null or assetspec.endmeasure is null)) ). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and classstructureid = :classstructureid and siteid=:siteid and ((startmeasure >= :frommeasure and startmeasure <= :tomeasure) or (endmeasure >= :frommeasure and endmeasure <= :tomeasure) or (startmeasure <= :frommeasure and endmeasure >= :tomeasure) or (startmeasure >= :tomeasure and endmeasure <= :frommeasure) or (startmeasure is null or endmeasure is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSPECDELETE",
            "target": "ASSETSPEC",
            "remarks": "Relationship to the AssetSpec table, used to find all specifications for a given asset where classstructureid is not equal to asset's classstructureid. (assetspec.assetnum = asset.assetnum and assetspec.classstructureid != asset.classstructureid). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and classstructureid != :classstructureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWASSETSPECHIST",
            "target": "ASSETSPECHIST",
            "remarks": "Relationship to the assetpechist table, used to find the specifications history records for a given asset. The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and ((removeddate is not null and :asofdate between createddate and removeddate) or (removeddate is null and createddate<=:asofdate)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSTATUS",
            "target": "ASSETSTATUS",
            "remarks": "Relationship to the AssetStatus table, used to find all status for a given asset. (assetstatus.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "UPDOWNSTATUSDATE",
            "target": "ASSETSTATUS",
            "remarks": "Relationship to the AssetStatus table, used to find the most recent asset up/down status date.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and changedate=(select max(changedate) from assetstatus where assetnum=:assetnum and siteid=:siteid and isrunning=:isrunning)",
            "cardinality": null
        },
        {
            "name": "ASSETSTATUSDUMMY",
            "target": "ASSETSTATUSDUMMY",
            "remarks": "Relationship to the AssetStatusDummy non-persistent table, used to find all status for a given asset. (assetstatusdummy.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETCACHEREL",
            "target": "ASSETTOPOCACHE",
            "remarks": "Relation between asset and cache",
            "whereClause": "sourceassetnum=:assetnum or targetassetnum=:assetnum",
            "cardinality": null
        },
        {
            "name": "ASSETTRANS",
            "target": "ASSETTRANS",
            "remarks": "Relationship to the AssetTrans table, used to find all asset transactions for a given asset. (assettrans.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSETTRANSID",
            "target": "ASSETTRANS",
            "remarks": "assettrans by assetid",
            "whereClause": "assetid = :assetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTRANSMOVEHIST",
            "target": "ASSETTRANS",
            "remarks": "Relationship to the AssetTrans table, used to find all asset transactions for a given asset with a given site.",
            "whereClause": "assetid = (select assetid from asset where assetnum=:assetnum and siteid=:siteid)",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSETUSER",
            "target": "ASSETUSERCUST",
            "remarks": "Relationship to the assetusercust records, used to find the asset records for a given user.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and isuser=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETUSERCUST",
            "target": "ASSETUSERCUST",
            "remarks": "Relationship to the AssetUserCust table, used to find all users and custodians for a given asset. (assetusercust.assetnum = asset.assetnum and siteid = siteid). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSETCUSTODIAN",
            "target": "ASSETUSERCUST",
            "remarks": "Relationship to the assetusercust records, used to find the asset records for a given custodian.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and iscustodian=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYASSETUSERCUST",
            "target": "ASSETUSERCUST",
            "remarks": "Relationship to the ASSETUSERCUST table to get the primary user of an asset.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and isprimary=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETWORKZONE",
            "target": "ASSETWORKZONE",
            "remarks": "Relationship from asset to assetworkzone",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ASSETZEROCOSTS",
            "target": "ASSETZEROCOSTS",
            "remarks": "Relationship to the nonpersistent parameter set for zeroing out asset costs.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPOMSFIELD",
            "target": "ASTMSOVER",
            "remarks": "Relationship to get topology mouse items directly from table field.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "TOPOMSSPEC",
            "target": "ASTSPECMSOVER",
            "remarks": "Relationship to get topology mouse items indirectly through the ASSETSPEC's attribute.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "AUTOATTRUPDATE",
            "target": "AUTOATTRUPDATE",
            "remarks": "Relationship to the workorder's autoattrupdate records, used to find the autoattrupdate records for a given asset.",
            "whereClause": "asset=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BOOKMARK",
            "target": "BOOKMARK",
            "remarks": "Relationship to the bookmark records, used to find the bookmark records for a given asset.",
            "whereClause": "app='ASSET' and keyvalue=:assetuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHANGEITEMNUM",
            "target": "CHANGEITEMNUM",
            "remarks": "Relationship to the nonpersistent parameter set for changing the ItemNum attribute.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find CI for a given Asset.",
            "whereClause": "assetnum=:assetnum and assetlocsiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "target": "CLASSANCESTOR",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (asset.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find all class specifications for a given asset. (classspec.classstructureid = asset.classstructureid). This resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ClassStructure table, used to find all classstructures for a given asset. (classstructure.classstructureid = asset.classstructureid). This resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET_CLASS_STRUCT",
            "target": "CLASSSTRUCTURE",
            "remarks": null,
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "SINGLE"
        },
        {
            "name": "COLLECTDETAILS",
            "target": "COLLECTDETAILS",
            "remarks": "Relationship to the COLLECTDETAILS table, used to find a CollectDetails record for a given Asset. (COLLECTDETAILS.assetnum = ASSET.assetnum). The resulting set will contain zero or one object.",
            "whereClause": "assetnum = :assetnum and siteid= :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find all companies for a given asset. (companies.company = asset.vendor). This resulting set will contain zero or one object.",
            "whereClause": "company = :vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCCOMPDESC",
            "target": "COMPANIES",
            "remarks": "Relationship to show description for pluscvendor",
            "whereClause": "company = :pluscvendor and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "MANUFACTURER",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find all manufacturers for a given asset. (companies.company = asset.manufacturer). This resulting set will contain zero or one object.",
            "whereClause": "company = :manufacturer and orgid=:orgid",
            "cardinality": "SINGLE"
        },
        {
            "name": "CONTRACTLINEASSET",
            "target": "CONTLINEASSET",
            "remarks": " Relationship to the Contract Line Asset table that stores the warranty begin and expiry dates",
            "whereClause": "assetid=:assetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "target": "CONTRACT",
            "remarks": "Relationship to the ContractAsset table, used to find a contract records for a given asset. (contractasset.assetnum = asset.assetnum and contractasset.orgid = asset.orgid). The resulting set will contain zero, one or more than one object.",
            "whereClause": "contractnum in (select contractnum from contractasset where assetid=:assetid) or contractnum in (select contractnum from warrantyasset where assetid=:assetid)",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "CONTRACTASSET",
            "target": "CONTRACTASSET",
            "remarks": "Relationship to the ContractAsset table, used to find the begin and end dates associated with an asset on a contract",
            "whereClause": "assetid=:assetid and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "DEPHISTORY",
            "target": "DEPHISTORY",
            "remarks": "Relationship to the DEPHISTORY object.",
            "whereClause": "assetnum=:assetnum",
            "cardinality": null
        },
        {
            "name": "DEPLOYEDASSET",
            "target": "DEPLOYEDASSET",
            "remarks": "Relationship to the DEPLOYEDASSET table, used to find the DEPLOYEDASSETs for the asset. The resulting set will contain zero or one object.",
            "whereClause": "nodeid in (select nodeid from reconlink where assetid=:assetid) ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEPRECIATION",
            "target": "DEPRECIATION",
            "remarks": "Relationship to the DEPRECIATION object.",
            "whereClause": "assetid=:assetid",
            "cardinality": null
        },
        {
            "name": "DEPTRANS",
            "target": "DEPTRANS",
            "remarks": "Relationship to the DEPTRANS object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Doclinks table, used to find all document records for a given asset and related records location, item and tool. (doclinks.ownertable = 'ASSET' and doclinks.ownerid = 'ASSETUID'. This resulting set will contain zero or more objects.",
            "whereClause": "(ownertable = 'ASSET' and ownerid = :assetuid) or (ownertable='LOCATIONS' and ownerid=(select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='ITEM' and ownerid=(select itemid from item where itemnum=:itemnum and itemsetid=:itemsetid and itemtype in (select value from synonymdomain where maxvalue ='ITEM' and domainid='ITEMTYPE'))) or (ownertable='TOOLITEM' and ownerid=(select itemid from item where itemnum=:itemnum and itemsetid=:itemsetid and itemtype in (select value from synonymdomain where maxvalue ='TOOL' and domainid='ITEMTYPE')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS_ASSETID",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Doclinks table, used to find all document records for a given asset and related records location, item and tool. This relationship includes asset-related doclinks using assetid (global) instead of assetuid (site-specific).(doclinks.ownertable = 'ASSET' and doclinks.ownerid = 'ASSETID'. This resulting set will contain zero or more objects.",
            "whereClause": "(ownertable = 'ASSET' and ownerid = :assetid) or (ownertable='LOCATIONS' and ownerid=(select locationsid from locations where location=:location and siteid=:siteid)) or (ownertable='ITEM' and ownerid=(select itemid from item where itemnum=:itemnum and itemsetid=:itemsetid and itemtype in (select value from synonymdomain where maxvalue ='ITEM' and domainid='ITEMTYPE'))) or (ownertable='TOOLITEM' and ownerid=(select itemid from item where itemnum=:itemnum and itemsetid=:itemsetid and itemtype in (select value from synonymdomain where maxvalue ='TOOL' and domainid='ITEMTYPE')))",
            "cardinality": null
        },
        {
            "name": "DOWNTIMEREPORT",
            "target": "DOWNTIMEREPORT",
            "remarks": "Relationship to non-persistent MODDOWNTIMEHIST object",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the ASSET to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILURELIST",
            "target": "FAILURELIST",
            "remarks": "Relationship to the Failurelist table,used to find all failure list for a given asset when there is no parent. (failurelist.failurecode = asset.failurecode and failurelist.parent is null). This resulting set will contain zero or one object.",
            "whereClause": "failurecode = :failurecode and parent is null and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "IMGLIB",
            "target": "IMGLIB",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given asset. (imglib.refobject='ASSET' and imglib.refobjectid=:ASSET.ASSETUID). The resulting set will contain zero or one object.",
            "whereClause": "refobject='ASSET' and refobjectid=:assetuid",
            "cardinality": null
        },
        {
            "name": "INCIDENTASSET",
            "target": "INCIDENT",
            "remarks": "Relationship to TICKETS table.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MOVETOINVBALANCES",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find invbalances for a given rotating asset's itemnum, storeroom location, site and binnum. (invbalances.itemnum = asset.itemnum and invbalances.location = asset.newlocation and invbalances.siteid = asset.newsite and invbalances.binnum = asset.movemodifybinnum and invbalances.itemsetid = asset.itemsetid). This resulting set will contain zero or one object. Note: If and only if this asset object is a rotating piece of asset and in the process of being moved, describes the asset's relationship to invbalances via its itemnum, proposed destination location (Asset.NewLocation)in a given site and proposed destination binnum(Asset.Binnum) that is does this asset's itemnum already exist in the destination location/binnum. Lotnum is not included since only non-lotted items can be rotating.",
            "whereClause": "itemnum = :itemnum and location = :newlocation and siteid = :newsite and binnum=:movemodifybinnum and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MOVETOINVBALANCES_BINNULL",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find invbalances for a given rotating asset's itemnum,storeroom location and site when the binnum is null. (invbalances.itemnum = asset.itemnum and invbalances.location = asset.newlocation and invbalances.siteid = asset.newsite and invbalances.binnum is null and invbalances.itemsetid = asset.itemsetid). This resulting set will contain zero or one object. Note: If and only if this asset object is a rotating piece of asset and in the process of being moved, describes the asset's relationship to invbalances via its itemnum and proposed destination location (Asset.NewLocation)in a given site when InvBalances.Binnum is null, that is does this asset's itemnum already exist in the destination location with a null binnum. Lotnum is not included since only non-lotted items can be rotating.",
            "whereClause": "itemnum = :itemnum and location = :newlocation and siteid = :newsite and binnum is null and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MOVETOINVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find inventory records for a given rotating asset's itemnum, storeroom location and site. (inventory.itemnum = asset.itemnum and inventory.location = asset.newlocation and inventory.siteid = asset.newsite and inventory.itemsetid = asset.itemsetid). This resulting set will contain zero or one object. Note: If and only if this asset object is a rotating piece of asset and in the process of being moved, describes the asset's relationship to inventory via its itemnum and proposed new location (Asset.NewLocation) that is does this asset's itemnum already exist in the destination location with a given site.",
            "whereClause": "itemnum=:itemnum and location=:newlocation and siteid=:newsite and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find all inventory items for a given asset. (inventory.itemnum = asset.itemnum and inventory.location = asset.location and inventory.itemsetid = asset.itemsetid). This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid = :itemsetid and siteid = :siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "INVENTORYSTATUS",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find all inventory items for a given asset with valid status.  (inventory.itemnum = asset.itemnum and inventory.location = asset.location and inventory.itemsetid = asset.itemsetid and inventory.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid = :itemsetid and siteid = :siteid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICECOST",
            "target": "INVOICECOST",
            "remarks": "Relationship to the InvoiceCost table, used to find all invoice costs for a given asset. (invoicecost.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVE",
            "target": "INVRESERVE",
            "remarks": "Relationship to the INVRESERVE table, used to find the ASSETS. The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVUSELINE",
            "target": "INVUSELINE",
            "remarks": "Relationship to the InvUseLine table, used to find all Invuseline records for a given asset. This resulting set will contain zero or more objects.",
            "whereClause": "(assetnum = :assetnum or rotassetnum = :assetnum) and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find all items for a given asset. (item.itemnum = asset.itemnum and item.itemsetid = asset.itemsetid). This resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSET_ITEM",
            "target": "ITEM",
            "remarks": null,
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given asset record. (itemcondition.itemnum = asset.itemnum and itemcondition.itemsetid=asset.itemsetid and itemcondition.conditioncode=asset.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg record for a given asset.(itemorginfo.itemnum = asset.itemnum and itemorginfo.itemsetid = asset.itemsetid and itemorginfo.orgid = asset.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPEC",
            "target": "ITEMSPEC",
            "remarks": "Relationship to the ItemSpec table, used to find all item specifications for a given asset. (itemspec.itemnum = asset.itemnum and itemspec.classstructureid = asset.classstructureid and itemspec.itemsetid = asset.itemsetid). This resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and classstructureid = :classstructureid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPITEMSTRUCT",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the Top-level ItemStruct table, used to find the item struct for a given rotating asset.(itemstruct.itemnum = asset.itemnum and itemstruct.itemid=asset.itemnum and itemstruct.parent is null and itemstruct.itemsetid = asset.itemsetid). This resulting set will contain zero or 1 object.",
            "whereClause": "1=1",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "JPASSETSPLINK",
            "target": "JPASSETSPLINK",
            "remarks": "Relationship to the JPAssetSpLink table, used to find all job plan, location, or item, and safety plan links for a given asset. (jpassetsplink.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LBSLOCATION",
            "target": "LBSLOCATION",
            "remarks": "Relationship to find the lbslocation from an asset",
            "whereClause": "refobject='ASSET' and key1 =:orgid and key2 =:assetnum and key3 =:siteid",
            "cardinality": null
        },
        {
            "name": "LINEARREFMETHOD",
            "target": "LINEARREFMETHOD",
            "remarks": "Relationship to the LinearRefMethod table, used to find this Asset's LinearRefMethod. (LinearRefMethod.LRM=Asset.LRM). The resulting set will contain one object.",
            "whereClause": "lrm=:lrm",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINKCLASSSPEC",
            "target": "LINKCLASSSPEC",
            "remarks": "Relationship to the nonpersistent LinkClassSpec object to the Asset object.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYSYSLOCASSET",
            "target": "LOCANCESTOR",
            "remarks": "Relationship to the LocAncestor table, used to find all location ancestors in the primary system locations. (locancestor.location = asset.location and locancestor.systemid = ( select primarysystem from site where site.siteid = asset.siteid)). This resulting set will contain zero or more objects.",
            "whereClause": "location =:location and systemid = ( select systemid from locsystem where primarysystem = 1 and siteid =:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCLPLOC",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Location table, used to find all locations for a given asset's loop location. (locations.location = asset.plusclploc). This resulting set will contain zero or one object.",
            "whereClause": "location = :plusclploc and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCNEWLPLOC",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Location table, used to find all locations for a given asset's new loop location. (locations.location = asset.pluscnewlploc). This resulting set will contain zero or one object.",
            "whereClause": "location = :pluscnewlploc and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "REPAIRFACILITY",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find all location records for a PMWorkGeneration record. (location=:repairfacility and siteid=:repfacsiteid). The resulting set will contain zero or more objects.",
            "whereClause": "location = :DEFAULTREPFAC and siteid=:DEFAULTREPFACSITEID",
            "cardinality": null
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Location table, used to find all locations for a given asset. (locations.location = asset.location). This resulting set will contain zero or one object.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "NEWLOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the destination Location table(new location the asset will have upon completion of a move, and is a non-persistent attribute),used to find all locations for a given asset in a given site. (locations.location = asset.newlocation and locations.siteid = asset.newsite). This resulting set will contain zero or one object.",
            "whereClause": "location = :newlocation and siteid = :newsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET_LOCATIONS",
            "target": "LOCATIONS",
            "remarks": null,
            "whereClause": "location=:location and siteid = :siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "LOCATIONSPEC",
            "target": "LOCATIONSPEC",
            "remarks": "Relationship to the LocationSpec table, used to find all location specifications for a given asset. (locationspec.location = asset.location and locationspec.classstructureid = asset.classstructureid). This resulting set will contain zero or more objects.",
            "whereClause": "location = :location and classstructureid = :classstructureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCKOUT",
            "target": "LOCKOUT",
            "remarks": "Relationship to the LockOut table, used to find all lock out assets of a hazard for a given asset. (lockout.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for asset. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:assetuid and ldownertable = 'ASSET'",
            "cardinality": null
        },
        {
            "name": "MATUSETRANS",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find all material use transactions for a given asset. (matusetrans.assetnum = asset.assetnum or matusetrans.rotassetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "(assetnum = :assetnum or rotassetnum = :assetnum) and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSETMATUSETRANS",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table used to create an empty MatUseTrans set from the matrectrans.  The WHERE clause is:  (1>2). The resulting set will contain zero objects. This relationship is primarily used to create new MatUseTrans records.",
            "whereClause": "1>2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREMENTS",
            "target": "MEASUREMENT",
            "remarks": "Relationship to the Measurement table, used to find all measurements for an asset.  The WHERE clause is: measurement.assetid = asset.assetid). The resulting set will contain zero or more objects.",
            "whereClause": "assetid = :assetid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MEASUREPOINT",
            "target": "MEASUREPOINT",
            "remarks": "Relationship to the MeasurePoint table, used to find all measure points for a given asset, and to validate the measurement table to ensure that only those measure points that have a corresponding reported measurement are returned. (measurepoint.assetnum = asset.assetnum and exists (select 1 from measurement where measurement.pointnum = measurepoint.pointnum)). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and exists (select 1 from measurement where measurement.pointnum = measurepoint.pointnum) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREPOINT_ALL",
            "target": "MEASUREPOINT",
            "remarks": "Relationship to the Measurepoint table, used to find the measurepoints for a given asset. (measurepoint.assetnum = asset.assetnum and measurepoint.siteid = asset.siteid ). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "METERGROUP",
            "target": "METERGROUP",
            "remarks": "Relationship to the MeterGroup table, used to find the MeterGroup object associated with this Asset's GroupName. The WHERE clause is: metergroup.groupname = asset.groupname. The resulting set will contain one object.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERINGROUP",
            "target": "METERINGROUP",
            "remarks": "Relationship to the MeterInGroup table, used to find the MeterInGroup objects associated with this Asset's GroupName. The WHERE clause is: meteringroup.groupname = asset.groupname. The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERREADINGS",
            "target": "METERREADING",
            "remarks": "Relationship to the MeterReading table, used to find all meter readings for a given asset with a given site",
            "whereClause": "siteid=:siteid and assetid = (select assetid from asset where assetnum=:assetnum and siteid=:siteid)",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MODDOWNTIMEHIST",
            "target": "MODDOWNTIMEHIST",
            "remarks": "Relationship to non-persistent MODDOWNTIMEHIST object",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCI",
            "target": "MULTIASSETLOCCI",
            "remarks": "multiassetlocci record for the asset",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "MULTIASSETLOCCISR",
            "target": "MULTIASSETLOCCI",
            "remarks": "Relationship from multiassetlocci to ticket table to get ticket related info",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and recordclass in (select value from synonymdomain where domainid='TKCLASS' and maxvalue='SR') and progress=0 and ((startmeasure >= :frommeasure and startmeasure <= :tomeasure) or (endmeasure >= :frommeasure and endmeasure <= :tomeasure) or (startmeasure <= :frommeasure and endmeasure >= :tomeasure) or (startmeasure >= :tomeasure and endmeasure <= :frommeasure) or (startmeasure is null or endmeasure is null))",
            "cardinality": null
        },
        {
            "name": "MULTIASSETLOCCIWO",
            "target": "MULTIASSETLOCCI",
            "remarks": "Relationship from multiassetlocci to workorder table to get workorder related info",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and recordclass in (select value from synonymdomain where domainid='WOCLASS' and maxvalue='WORKORDER') and ((startmeasure >= :frommeasure and startmeasure <= :tomeasure) or (endmeasure >= :frommeasure and endmeasure <= :tomeasure) or (startmeasure <= :frommeasure and endmeasure >= :tomeasure) or (startmeasure >= :tomeasure and endmeasure <= :frommeasure) or (startmeasure is null or endmeasure is null))",
            "cardinality": null
        },
        {
            "name": "PLUSCASSETSTATUS",
            "target": "PLUSCASSETSTATUS",
            "remarks": "relates to the status history table",
            "whereClause": "assetnum=:assetnum and orgid=:orgid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCASSETSLINK",
            "target": "PLUSCDSASSETLINK",
            "remarks": "Relationship to PLUSCDSASSETLINK",
            "whereClause": "assetnum=:assetnum and orgid=:orgid and siteid=:siteid and revisionnum in (select revisionnum from plusdsplan where dsplannum=pluscdsassetlink.dsplannum and status in (select value from synonymdomain where domainid = 'PLUSCDSSTATUS' and maxvalue = 'APPR') and ((orgid =:orgid and siteid=:siteid) or (orgid is null and siteid is null) or (orgid=:orgid and siteid is null)))",
            "cardinality": null
        },
        {
            "name": "PLUSCASPOTCHECK",
            "target": "PLUSCSPOTCHECK",
            "remarks": "Relationship to the PLUSCSPOTCHECK table through the WORKORDER table for the View Spot Check History dialog",
            "whereClause": "siteid = :siteid and wonum in ( select wo.wonum from workorder wo, pluscspotcheck spotc where wo.wonum = spotc.wonum and spotc.siteid=:siteid and spotc.siteid = wo.siteid and spotc.assetnum = :assetnum )",
            "cardinality": null
        },
        {
            "name": "PLUSCTPHISTORY",
            "target": "PLUSCTPHISTORY",
            "remarks": "Relationship between PLUSCTPHISTORY and ASSET.",
            "whereClause": "assetnum=:assetnum and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null))",
            "cardinality": null
        },
        {
            "name": "PLUSCAWODS",
            "target": "PLUSCWODS",
            "remarks": "Relationship to the PLUSCWODS table through its related assetnum used on View Calibration History dialog",
            "whereClause": "siteid = :siteid and assetnum = :assetnum",
            "cardinality": null
        },
        {
            "name": "PM",
            "target": "PM",
            "remarks": "Relationship to the PM table, used to find all preventive maintenance for a given asset.(pm.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "PMVIAROUTE",
            "target": "PMVIAROUTE",
            "remarks": "Relationship to the asset's non-persistent PMViaRoute records. (PMViaRoute is a non-persistent object, no where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROBLEMASSET",
            "target": "PROBLEM",
            "remarks": "Relationship to TICKETS table.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRESULT",
            "target": "RECONRESULT",
            "remarks": "Relationship to the Reconresult table, used to find the reconresult records for the asset based on the NODEID in the reconlink table. The resulting set will contain one or more objects.",
            "whereClause": "reconresult.nodeid in (select nodeid from reconlink where reconlink.assetid=:assetid and reconlink.recontype in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and reconlink.compset in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')) and code not in ('C3', 'C4','C1','C2') and recontype in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECORDTIMEZONE",
            "target": "RECORDTIMEZONE",
            "remarks": "Get associated Time Zone.",
            "whereClause": "objectname = 'ASSET' and objectid = :assetuid",
            "cardinality": null
        },
        {
            "name": "RECORDTIMEZONEDIALOG",
            "target": "RECORDTIMEZONEDIALOG",
            "remarks": "Used to show the Associate Time Zone Dialog Box.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "PMROUTE_STOP",
            "target": "ROUTE_STOP",
            "remarks": "Relationship to the route_stop records, used to find the route_stop records via PM for a given asset.",
            "whereClause": "route in (select route from pm) and (assetnum=:assetnum and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROUTE_STOP",
            "target": "ROUTE_STOP",
            "remarks": "Relationship to the Route_Stop table, used to find all route stops for a given asset. (route_stop.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXHAZMAT",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to the SafetyLexicon table, used to find all safetylexicons for a given asset where hazard is hazardous-material enabled. (safetylexicon.assetnum = asset.assetnum and exists (select 1 from hazard where hazard.hazardid = safetylexicon.hazardid and hazard.hazmatenabled = \"T\")). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.hazmatenabled=:yes) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXHAZPREC",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to the SafetyLexicon table, used to find all safetylexicons for a given asset where hazard is precautionenabled. (safetylexicon.assetnum = asset.assetnum and exists (select 1 from hazard where hazard.hazardid = safetylexicon.hazardid and hazard.precautionenabled = \"T\")). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.precautionenabled=:yes) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXICON",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to the SafetyLexicon table, used to find all safetylexicons for a given asset. (safetylexicon.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXNOTAGOUT",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to the SafetyLexicon table, used to find all safetylexicons for a given asset where tagout is null.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid and tagoutid is null",
            "cardinality": null
        },
        {
            "name": "SAFETYLEXTAGOUT",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to the SafetyLexicon table, used to find all safetylexicons for a given asset where hazard is tagout enabled. (safetylexIcon.assetnum = asset.assetnum and exists (select 1 from hazard where hazard.hazardid = safetylexicon.hazardid and hazard.tagoutenabled = \"T\" and safetylexicon.tagoutid is null)). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.tagoutenabled=:yes and safetylexicon.tagoutid is null) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVICEADDRESS",
            "target": "SERVICEADDRESS",
            "remarks": "Service Address for Asset",
            "whereClause": "addresscode = :saddresscode and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "ADDRESSABLE_SERVICEADDRESS",
            "target": "SERVICEADDRESS",
            "remarks": "Relationship from ASSET (Addressable) that doesn't bring any Service Address, used to load a empty set to be used as based for a fake mbo creation.",
            "whereClause": "1 = 2",
            "cardinality": null
        },
        {
            "name": "DEPTARGETASSETSITEID",
            "target": "SITE",
            "remarks": "Relationship to get the Target Asset Site",
            "whereClause": "orgid =:orgid and siteid=:deptargetassetsiteid",
            "cardinality": null
        },
        {
            "name": "NEWSITE",
            "target": "SITE",
            "remarks": "Relationship to the site records, used to find the site record for a given site.",
            "whereClause": "siteid=:newsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPAREPART",
            "target": "SPAREPART",
            "remarks": "Relationship to the SparePart table, used to find all spareparts for a given asset. (sparepart.assetnum = asset.assetnum).  This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "SPAREPART_AVAILTOADD",
            "target": "SPAREPART",
            "remarks": "Relationship to the SparePart table, used to find all spareparts not yet related to this asset. (sparepart.assetnum != asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum != :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPAREPARTITEM",
            "target": "SPAREPART",
            "remarks": "Relationship to the Sparepart table, used to find all spare parts for a given asset.(sparepart.assetnum = asset.assetnum and sparepart.itemnum = asset.itemnum and sparepart.itemsetid = asset.itemsetid). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and itemnum=:itemnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPRELATEDASSET",
            "target": "SPRELATEDASSET",
            "remarks": "Relationship to the SPRelatedAsset table, used to find all safety related assets of a work asset for a given asset. (sprelatedasset.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPRELATEDASSETRELASSET",
            "target": "SPRELATEDASSET",
            "remarks": "Relationship to the SPRelatedAssetRelAsset table, used to find all safety related assets of a work asset for a related asset. (sprelatedasset.relatedasset = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "relatedasset = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPWORKASSET",
            "target": "SPWORKASSET",
            "remarks": "Relationship to the SPWorkAsset table, used to find all safety plan's work assets for a given asset. (spworkasset.workasset = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "workasset = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRASSET",
            "target": "SR",
            "remarks": "Relationship to TICKETS table.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='LOCASSETSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGOUT",
            "target": "TAGOUT",
            "remarks": "Relationship to the TagOut table, used to find all tag out assets to prevent a hazard for a given asset. (tagout.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWTKT",
            "target": "TICKET",
            "remarks": "Relationship to ticket object.",
            "whereClause": "assetnum=:assetnum and assetsiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TLOAMASSETPERSONGRP",
            "target": "TLOAMASSETGRP",
            "remarks": "Relationship between the ASSET and TLOAMASSETGRP tables",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "TOOLITEM",
            "target": "TOOLITEM",
            "remarks": null,
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Asset application, displays all contracts that cover this asset and its parents.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the ASSET to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOCHANGEASSET",
            "target": "WOCHANGE",
            "remarks": "Relationship to WOCHANGE table.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORELEASEASSET",
            "target": "WORELEASE",
            "remarks": "Relationship to WORELEASE table.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPOLOGYASSETWORKS",
            "target": "WORKORDER",
            "remarks": "Relation that returns all the work          tasks associated with this asset that have not been completed or          canceled.",
            "whereClause": "wonum in (select ma.recordkey from WORKORDER wo, MULTIASSETLOCCI ma          where wo.WONUM=ma.RECORDKEY and ma.assetnum=wo.assetnum and wo.assetnum=:assetnum)          and woclass in (select value from synonymdomain where domainid='WOCLASS' and maxvalue in ('ACTIVITY', 'CHANGE', 'WORKORDER'))          and status in (select value from synonymdomain where domainid='WOSTATUS' and maxvalue not in ('COMP','CAN','CLOSE'))",
            "cardinality": null
        },
        {
            "name": "OPENWO",
            "target": "WORKORDER",
            "remarks": "Relationship to the Workorder table,used to find all open work orders for a given asset.(workorder.assetnum = asset.assetnum and workorder.historyflag = \"F\"). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and historyflag = :no and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCAVTLUSE",
            "target": "WORKORDER",
            "remarks": "Relationship to the WORKORDER table used by the view tool usage dialog",
            "whereClause": "siteid = :siteid and wonum in (select refwo from tooltrans where rotassetnum = :assetnum and siteid = :siteid group by refwo having sum(toolqty) > 0)",
            "cardinality": null
        },
        {
            "name": "ASSETREFWO",
            "target": "WORKORDER",
            "remarks": "Relationship to the workorder records, used to find the workorder record in a given site.",
            "whereClause": "wonum=:refwo and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLWO",
            "target": "WORKORDER",
            "remarks": "workorders by assetnum, siteid",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSETWO",
            "target": "WORKORDER",
            "remarks": "Relationship to the workorder records, used to find the workorder record in a given site.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKPERIOD",
            "target": "WORKPERIOD",
            "remarks": "Relationship to WorkPeriod table. This relationship joins the two tables in ROS.",
            "whereClause": "calnum=:calnum and orgid=:orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "ASSET",
            "source": "AMCREWTOOL",
            "remarks": "Relationship between AMCREWTOOL and ASSET tables.",
            "whereClause": "assetnum = :assetnum and siteid = :siteid and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "AMCREWTOOLUNRESTRICTED",
            "remarks": "Relationship from AMCREWTOOLUNRESTRICTED to ASSET",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "TOASSET",
            "source": "AMCREWTOOLUNRESTRICTED",
            "remarks": "Relationship between AMCREWTOOLUNRESTRICTED and ASSET tables.",
            "whereClause": "assetnum = :toassetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "AMCREWWOTL",
            "remarks": "Relationship from table AMCREWWOTL to ASSET.",
            "whereClause": "assetnum=:assetnum",
            "cardinality": null
        },
        {
            "name": "AFFECTEDASSETNUM",
            "source": "AREASAFFECTED",
            "remarks": "Relationship from Areas Affected Assetnum to the ASSET table - used to get asset description.",
            "whereClause": "assetnum=:affectedassetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET_ASSET",
            "source": "ASSET",
            "remarks": "Relationship to the asset records, used to find the asset records in a given site.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET_PARENT",
            "source": "ASSET",
            "remarks": null,
            "whereClause": "assetnum=:parent and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETCHILDREN",
            "source": "ASSET",
            "remarks": "Relationship to the Asset table, used to find children for a given asset. (asset.assetnum = asset.parent and asset.siteid = asset.siteid). This resulting set will contain zero or more objects.",
            "whereClause": "parent = :assetnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETSITE",
            "source": "ASSET",
            "remarks": "Relationship to the asset records, used to find the asset records in a given site.",
            "whereClause": "assetnum=:assetnum and siteid=:newsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "source": "ASSET",
            "remarks": "Relationship to the asset records, used to find the children records for a asset.",
            "whereClause": "parent = :assetnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEPTARGETASSET",
            "source": "ASSET",
            "remarks": "Relationship to get the Target Asset",
            "whereClause": "orgid =:orgid and assetnum=:deptargetasset and siteid=:deptargetassetsiteid",
            "cardinality": null
        },
        {
            "name": "MOVEDASSET",
            "source": "ASSET",
            "remarks": "Relationship to the asset records, used to find whether the same asset exist in a given site(moved previously).",
            "whereClause": "assetid=:assetid and siteid=:newsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWASSETSITE",
            "source": "ASSET",
            "remarks": "Relationship to the asset records, used to find the asset records for a given assetnum and a given site.",
            "whereClause": "assetnum=:newassetnum and siteid=:newsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWPARENT",
            "source": "ASSET",
            "remarks": "Relationship to the Asset table,used to find the asset object for the current object's parent (the parent the asset will have upon completion of the  move, and is a non-persistent attribute). (asset.assetnum = asset.newparent and asset.siteid = asset.newsite). The resulting set will contain one object.",
            "whereClause": "assetnum = :newparent and siteid = :newsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENT",
            "source": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the parent for a given asset. (asset.assetnum = asset.parent). This resulting set will contain zero or one object.",
            "whereClause": "assetnum = :parent and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPLACEASSET",
            "source": "ASSET",
            "remarks": "Relationship to the asset records, used to find the replace asset.",
            "whereClause": "assetnum=:replaceassetnum and siteid=:replaceassetsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "source": "ASSETFEASPECHIST",
            "remarks": "Relationship to the Asset table, used to find ASSETFEASPECHIST's linear Asset. (assetfeaspechist.assetnum=asset.assetnum and assetfeaspechist.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the Asset table, used to find this AssetFeature's linear Asset. (assetfeature.assetnum=asset.assetnum and assetfeature.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "ASSETFEATURE",
            "remarks": "Relationship to the Asset table, used to find this AssetFeature's Asset. (Asset.Assetnum=AssetFeature.Assetnum and Asset.SiteId=AssetFeature.SiteId). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "source": "ASSETFEATUREHIST",
            "remarks": "Relationship to the Asset table, used to find this AssetFeatureHist's linear Asset. (assetfeaturehist.assetnum=asset.assetnum and assetfeaturehist.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "source": "ASSETFEATURESPEC",
            "remarks": "Relationship to the Asset table, used to find this AssetFeatureSpec's linear Asset. (assetfeaturespec.assetnum=asset.assetnum and assetfeaturespec.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "ASSETLOCCOMM",
            "remarks": "Relationship to the ASSET table, used to find the asset records. The resulting set will contain one object.",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "ASSETLOCRELATION",
            "remarks": "Relationship to the Asset table, used to find all assets for a given sourceasset or targetasset",
            "whereClause": "assetnum=:sourceassetnum or assetnum=:targetassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCEASSET",
            "source": "ASSETLOCRELATION",
            "remarks": "Relationship to the Asset table, used to find Asset for a given sourceasset.",
            "whereClause": "assetnum=:sourceassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCELINEARASSET",
            "source": "ASSETLOCRELATION",
            "remarks": "Relationship to the Asset table, used to find this AssetLocRelation's linear Asset. (assetlocrelation.sourceassetnum=asset.assetnum and assetlocrelation.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:sourceassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETASSET",
            "source": "ASSETLOCRELATION",
            "remarks": "Relationship to the Asset table, used to find Asset for a given targetasset.",
            "whereClause": "assetnum=:targetassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETLINEARASSET",
            "source": "ASSETLOCRELATION",
            "remarks": "Relationship to the Asset table, used to find this AssetLocRelation's linear Asset. (assetlocrelation.targetassetnum=asset.assetnum and assetlocrelation.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:targetassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCEASSET",
            "source": "ASSETLOCRELHIST",
            "remarks": "Relationship to the Asset table, used to find asset for a given sourceasset",
            "whereClause": "assetnum=:sourceassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCELINEARASSET",
            "source": "ASSETLOCRELHIST",
            "remarks": "Relationship to the Asset table, used to find this AssetLocRelHist's linear Asset Measures.",
            "whereClause": "assetnum=:sourceassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETASSET",
            "source": "ASSETLOCRELHIST",
            "remarks": "Relationship to the Asset table, used to find Asset for a given targetasset.",
            "whereClause": "assetnum=:targetassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETLINEARASSET",
            "source": "ASSETLOCRELHIST",
            "remarks": "Relationship to the Asset table, used to find this AssetLocRelHist's linear Asset Measures.",
            "whereClause": "assetnum=:targetassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "ASSETMETER",
            "remarks": "Relationship to the ASSET table, used to find the Asset associated with the AssetMeter. The WHERE clause is: asset.assetnum = assetmeter.assetnum and asset.siteid = assetmeter.siteid and asset.orgid = assetmeter.orgid. The resulting set will contain one object.",
            "whereClause": "assetnum = :assetnum and siteid = :siteid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "source": "ASSETMETER",
            "remarks": "Relationship to the Asset table, used to find this assetmeter's linear Asset. (assetmeter.assetnum=asset.assetnum and assetmeter.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DFLTNEWPARENT",
            "source": "ASSETMOVEDFLT",
            "remarks": "Relationship to the asset records, used to find the asset records in a given site.",
            "whereClause": "assetnum=:dfltnewparent and siteid=:dfltnewsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "ASSETSPEC",
            "remarks": "Relationship to the  Asset table, used to find all asset for a given asset specification. (asset.assetnum = assetspec.assetnum).This resulting set will contain zero or one object.",
            "whereClause": "assetnum=:assetnum and classstructureid =:classstructureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "source": "ASSETSPEC",
            "remarks": "Relationship to the Asset table, used to find this AssetSpec's linear Asset. (assetspec.assetnum=asset.assetnum and assetspec.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "source": "ASSETSPECHIST",
            "remarks": "Relationship to the Asset table, used to find this AssetSpecHist's linear Asset. (assetspechist.assetnum=asset.assetnum and assetspechist.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "ASSETTRANS",
            "remarks": "Relationship to the AssetTrans table, used to find all asset transactions for a given asset. (assettrans.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "ASSETUSERCUST",
            "remarks": "Relationship to the asset table from assetusercust where assetusercust.assetnum=asset.assetnum",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "ASSETWORKZONE",
            "remarks": "Relationship from assetworkzone to asset",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "AUTOATTRUPDATE",
            "remarks": "Relationship to the asset table, used to find asset . The result set will contain one object.",
            "whereClause": "assetnum=:asset and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETGLACCOUNT",
            "source": "CHARTOFACCOUNTS",
            "remarks": "Relationship to the asset table, used to find the asset records where this gl account is being used (asset.orgid = chartofaccounts.orgid and asset.glaccount = chartofaccounts.glaccount). The resulting set will contain zero or more objects.",
            "whereClause": "orgid = :orgid and glaccount = :glaccount",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "CI",
            "remarks": "Relationship to the Assets table, used to find asset for a given CI Asset",
            "whereClause": "assetnum=:assetnum and siteid=:assetlocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "CLASSSPEC",
            "remarks": "Relationship to the Asset table, used to find all asset associated with a given class specification. (asset.classstructureid = classspec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the Asset table, used to find all asset associated with the given class structure. (asset.classstructureid = classstructure.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETS_ONLY",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the asset table, used to find the asset records for a given classstructure. (classstructure.classstructureid = asset.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "COLLECTDETAILS",
            "remarks": "Relationship to the ASSET table, used to find an ASSET record for a given COLLECDETAIL. (ASSET.asstenum = COLLECTDETAILS.assetnum). The resulting set will contain zero or one object.",
            "whereClause": "assetnum = :assetnum and siteid  = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "CONTLEASEENDASST",
            "remarks": "Relationship to the Asset table, used to find all asset for a given contract asset. (contractasset.assetnum=asset.assetnum and contractasset.orgid=asset.orgid).",
            "whereClause": "assetnum=:assetnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "CONTRACTASSET",
            "remarks": "Relationship to the Asset table, used to find all asset for a given contract asset. (contractasset.assetnum=asset.assetnum and contractasset.orgid=asset.orgid)",
            "whereClause": "assetid=:assetid and moved=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUERYASSET",
            "source": "CONTRACTASSET",
            "remarks": "Relationship to the asset table to obtain all asset records that have the same asset identifier(contractasset.assetid=asset.assetid",
            "whereClause": "assetid=:assetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "CONTRACTLINE",
            "remarks": "Relationship to the contractline table.(cotractline.itemnum=asset.itemnum and cotractline.itemsetid=asset.itemsetid)",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEPHISTORYNEXTASSET",
            "source": "DEPHISTORY",
            "remarks": "Relationship to the DEPHISTORY object for field nextasset.",
            "whereClause": "assetnum=:nextasset and siteid=:nextassetsiteid",
            "cardinality": null
        },
        {
            "name": "DEPHISTORYPREVIOUSASSET",
            "source": "DEPHISTORY",
            "remarks": "Relationship to the DEPHISTORY object for field previousasset.",
            "whereClause": "assetnum=:previousasset and siteid=:previousassetsiteid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "DEPRECIATION",
            "remarks": "Relationship to the DEPRECIATION object.",
            "whereClause": "assetid=:assetid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "DRILLDOWN",
            "remarks": "Relationship to the Asset table, used to find the information for the asset which is being referenced by drilldown. (asset.assetnum = drilldown.assetvalue or ((asset.location=drilldown.locvalue and asset.parent is null) or (asset.location=drilldown.locvalue and asset.parent not in (select assetnum from asset b where b.location= drilldown.locvalue and b.assetnum=asset.parent)))). The resulting set will contain one object.",
            "whereClause": "((location=:locvalue and siteid =:siteid and parent is null) or (location=:locvalue and siteid=:siteid and not exists(select assetnum from asset b where b.location= :locvalue and b.siteid =:siteid and b.assetnum=asset.parent)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET_ID",
            "source": "DRILLDOWN",
            "remarks": "Relationship to the asset table, used to find the asset record for a given assetnum. (drilldown.assetnum = asset.assetnum and drilldown.siteid=asset.siteid). The resulting set will contain zero or 1 objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET_INLOC",
            "source": "DRILLDOWN",
            "remarks": "Relationship to the Asset table, used to find the asset record in a given operating location (asset.assetnum = drilldown.assetinloc). The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:assetvalue and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET_INLOCATION",
            "source": "DRILLDOWN",
            "remarks": "Relationship to the Asset table, used to find the asset records in a given operating location (asset.location = drilldown.locvalue). The resulting set will contain zero or more objects.",
            "whereClause": "((location=:locvalue and siteid =:siteid and parent is null) or (location=:locvalue and siteid=:siteid and not exists (select assetnum from asset b where b.location= :locvalue and b.siteid =:siteid and  b.assetnum=asset.parent)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETDDCHILDREN",
            "source": "DRILLDOWN",
            "remarks": "Relationship to the asset table, used to find the children of the current asset in focus in the drilldown hierarchy. (asset.parent = drilldown.assethierarchy ). The resulting set will contain zero or more objects.",
            "whereClause": "parent=:assetinhierarchy and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETINLOC",
            "source": "DRILLDOWN",
            "remarks": "Relationship to the asset table, used to find the asset record for a given assetinloc.",
            "whereClause": "assetnum=:assetinloc and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MIN_ASSET_INLOCATION",
            "source": "DRILLDOWN",
            "remarks": "Relationship to the asset table, used to find the minimum asset in a given set.",
            "whereClause": "assetnum in (select min(assetnum) from asset where (((location=:locvalue and siteid =:siteid and parent is null) or (location=:locvalue and siteid=:siteid and not exists (select assetnum from asset b where b.location= :locvalue and b.siteid =:siteid and  b.assetnum=asset.parent)))))",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "INVENTORY",
            "remarks": "Relationship to the Asset table, used to find the Inventory's rotating asset. (Inventory.itemnum = Asset.itemnum and asset.itemsetid = inventory.itemsetid and Asset.Moved = 0). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and orgid = :orgid and moved = 0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETINV",
            "source": "INVENTORY",
            "remarks": "Relationship to asset table, used to find asset records for the given item, location, siteid. The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid  and location=:location and siteid=:siteid and status not in (select value from synonymdomain where maxvalue in ('DECOMMISSIONED') and domainid='LOCASSETSTATUS')",
            "cardinality": null
        },
        {
            "name": "ASSETNOTRET",
            "source": "INVENTORY",
            "remarks": "Relationship to the Asset table, used to find the Inventory's rotating asset. (Inventory.itemnum = Asset.itemnum and asset.itemsetid = inventory.itemsetid and Asset.Moved = 0 and returnvendor=0). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and moved=0 and returnedtovendor=0",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "INVRESERVE",
            "remarks": "Relationship to the Asset table, used to find the asset information. The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "INVUSELINE",
            "remarks": "Relationship to the Asset table, used to find the asset for which the material is issued. The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "NEWASSETSITE",
            "source": "INVUSELINE",
            "remarks": "Relationship to the Asset table, used to find the rotating asset. The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:newassetnum and siteid=:tositeid",
            "cardinality": null
        },
        {
            "name": "ROTASSET",
            "source": "INVUSELINE",
            "remarks": "Relationship to the Asset table, used to find the rotating asset which is issued/moved to a non-inventory location. The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:rotassetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ROTATINGASSET",
            "source": "INVUSELINE",
            "remarks": "Relationship to the Asset table, used to find the rotating asset which is issued/moved to a non-inventory location. The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:rotassetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "FROMASSET",
            "source": "INVUSELINE",
            "remarks": "Relationship to the Asset table, used to find the rotating asset record for a given InvUseline Transfer record. The resulting set will contain zero or one object.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "NEWASSETSITE",
            "source": "INVUSELINESPLIT",
            "remarks": "Relationship to the Asset table, used to find the rotating asset. The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:newassetnum and siteid=:tositeid",
            "cardinality": null
        },
        {
            "name": "ROTASSET",
            "source": "INVUSELINESPLIT",
            "remarks": "Relationship to the Asset table, used to find the rotating asset which is issued/moved to a location. The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:rotassetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "ISSUECURRENTITEM",
            "remarks": "Relationship to the asset table, used to find the asset record for a given IssueCurrentItem record. (asset.assetnum=issuecurrentitem.assetnum and asset.siteid=issuecurrentitem.tositeid). The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:assetnum and siteid=:tositeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "ITEM",
            "remarks": "Relationship to the Asset table, used to find all asset for a given item. (asset.itemnum = item.itemnum and asset.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "ITEMORGINFO",
            "remarks": "Relationship to the Asset table, used to find all assets for a given item. (asset.itemnum = itemorginfo.itemnum and asset.itemsetid = itemorginfo.itemsetid and asset.orgid=itemorgifo.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid = :itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "JPASSETSPLINK",
            "remarks": "Relationship to the Work Asset's records, used to find the assets for a given work asset. (asset.assetnum=jpassetsplink.assetnum. The resulting set will contain zero or one record.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "LABTRANS",
            "remarks": "Relationship to the Asset table. Used to find out Asset for the LabTrans. (Asset.assetnum=LabTrans.assetnum). The resultset will contain at most  1 object.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "LINEARREFMETHOD",
            "remarks": "Relationship to the Asset table, used to find this LinearRefMethod's LinearRefMethod. (Asset.LRM=LinearRefMethod.LRM). The resulting set will contain one object.",
            "whereClause": "lrm=:lrm",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWASSETSITE",
            "source": "LINESPLIT",
            "remarks": "Relationship to the Asset table, used to find the rotating asset. The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:newassetnum and siteid=:tositeid",
            "cardinality": null
        },
        {
            "name": "ROTASSET",
            "source": "LINESPLIT",
            "remarks": "Relationship to the Asset table, used to find the rotating asset. The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:rotassetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "LOCATIONMETER",
            "remarks": "Relationship to the Asset table, used to find Assets associated with the LocationMeter's Location. The WHERE clause is: asset.location= locationmeter.location and asset.siteid = locationmeter.siteid and exists (select assetnum from assetmeter where assetmeter.assetnum=asset.assetnum and assetmeter.siteid=asset.siteid and assetmeter.siteid = locationmeter.siteid and assetmeter.metername=locationmeter.metername and assetmeter.active=:yes and assetmeter.rolldownsource in (select value from SYNONYMDOMAIN where DOMAINID='ROLLDOWNSOURCE' and maxvalue='LOCATION')). The resulting set will contain zero or more objects.",
            "whereClause": "location= :location and siteid = :siteid and exists (select assetnum from assetmeter where assetmeter.assetnum=asset.assetnum and assetmeter.siteid=asset.siteid and assetmeter.siteid = :siteid and assetmeter.metername=:metername and assetmeter.active=:yes and assetmeter.rolldownsource in (select value from synonymdomain where domainid='ROLLDOWNSOURCE' and maxvalue='LOCATION'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVEASSET",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Asset table, used to find the active asset records for the location. The resulting set will contain one or more objects.",
            "whereClause": "location=:location and siteid = :siteid and status not in (select value from synonymdomain where maxvalue in ('DECOMMISSIONED') and domainid='LOCASSETSTATUS')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Asset table. (locations.location = asset.location). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and siteid = :siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "PLUSCASSET",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Asset table, including assets related through the loop location field. (locations.location = asset.location). The resulting set will contain zero or more objects.",
            "whereClause": "(location=:location or plusclploc=:location) and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "ASSOCASSET",
            "source": "MASTERPM",
            "remarks": "Relationship to MasterPMItem's asset records, used to find all the associated asset records for this rotating item on Master PM record. (:applymasterpmtoasset=:yes and itemnum =:masterpmitemnum and assetnum not in(select assetnum from pm where masterpm=:pmnum and assetnum is not null) and asset.itemsetid = pm.itemsetid). The resulting set will contain zero to many records.",
            "whereClause": ":applympmtoloc=:yes and itemnum =:itemnum and itemsetid = :itemsetid and :sitefiltering",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the Asset table, used to find the asset for which the material is received as a direct issue. (asset.assetnum = matrectrans.assetnum). The resulting set will contain zero or one object. The assetnum is used as rotating asset when a rotable item is moved/transferred from one location to another.",
            "whereClause": "assetnum=:rotassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETFORMATREC",
            "source": "MATRECTRANS",
            "remarks": "Relationship to get the Asset table to get the asset numbers that were created from a MatRecTrans record ",
            "whereClause": "assetnum in (select assetnum from assettrans where matrectransid=:matrectransid) ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FROMASSET",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the Asset table, used to find the rotating asset record for a given Material Tranffer record. The resulting set will contain zero or one object.",
            "whereClause": "assetnum = :rotassetnum and siteid=:fromsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEARCVASSET",
            "source": "MATRECTRANS",
            "remarks": "Relationship to get the Asset",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROTASSET",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the asset records, used to find the asset records for a given assetnum and a given site.",
            "whereClause": "assetnum=:rotassetnum and siteid=:fromsiteid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the Asset table, used to find the asset for which the the material is issued. (asset.assetnum = matusetrans.assetnum).The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROTASSET",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the Asset table, used to find the rotating asset which is issued/moved to a non-inventory location.(asset.assetnum = matusetrans.rotassetnum). The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:rotassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROTATINGASSET",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the Asset table, used to find the rotating asset which is issued/moved to a non-inventory location.(asset.assetnum = matusetrans.rotassetnum). The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:rotassetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "source": "MEASUREMENT",
            "remarks": "Relationship to the Asset table, used to find this Measurement's linear Asset. (measurement.assetnum=asset.assetnum and measurement.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "MEASUREMENT",
            "remarks": "Used to find the asset object for this measurement.  (assetnum=:assetnum and siteid=:siteid).  The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the Asset table, used to find the asset for a given measure point. (asset.assetnum = measurepoint.assetnum and asset.siteid = measurepoint.siteid ). The resulting set will contain one object.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid and siteid = :siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "ASSET_REPORTING",
            "source": "MEASUREPOINT",
            "remarks": "Reporting Relationship",
            "whereClause": "siteid=:siteid and assetnum=:assetnum",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LINEARASSET",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the Asset table, used to find the asset for a given measure point.   Used to test if the asset on a measurepoint is linear.  (asset.assetnum = measurepoint.assetnum and asset.siteid = measurepoint.siteid ). The resulting set will contain one object.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "METERGROUP",
            "remarks": "Relationship to the Asset table, used to find Assets associated with the MeterGroup. The WHERE clause is: asset.groupname = metergroup.groupname. The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "METERINGROUP",
            "remarks": "Relationship to the Asset table, used to find Assets associated with the MeterInGroup's groupname. The WHERE clause is: asset.groupname = meteringroup.groupname. The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "source": "METERREADING",
            "remarks": "Relationship to the Asset table, used to find this MeterReading's linear Asset. (meterreading.assetnum=asset.assetnum and meterreading.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "MODDOWNTIMEHIST",
            "remarks": "Relationship to ASSET object",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "MR",
            "remarks": "Relationship to the Asset table, used to find all asset records whose asset number match that of the material requisition's. (asset.assetnum = mr.assetnum). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "source": "MR",
            "remarks": "Relationship to the Asset table, used to find this MR's linear Asset. (mr.assetnum=asset.assetnum and mr.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MR_ASSET",
            "source": "MR",
            "remarks": null,
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "MULTIASSETLOCCI",
            "remarks": "asset record for the multiassetlocci",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LINEARASSET",
            "source": "MULTIASSETLOCCI",
            "remarks": "Relationship to the Asset table, used to find this MultiAssetLocCI's linear Asset. (multiassetlocci.assetnum=asset.assetnum and multiassetlocci.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MOVEDASSET",
            "source": "MULTIASSETLOCCI",
            "remarks": "assetnum to MultiAssetLocCI",
            "whereClause": "assetnum=:assetnum and siteid=:movetosite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MOVETOPARENT",
            "source": "MULTIASSETLOCCI",
            "remarks": "movetoparent for the MultiAssetLocCI",
            "whereClause": "assetnum=:movetoparent and siteid=:movetosite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWASSETSITE",
            "source": "MULTIASSETLOCCI",
            "remarks": "new asset",
            "whereClause": "assetnum=:newassetnum and siteid=:movetosite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPLACEASSET",
            "source": "MULTIASSETLOCCI",
            "remarks": "replaceassetnum for the  MultiAssetLocCI",
            "whereClause": "assetnum=:replaceassetnum and siteid=:replacementsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "MULTIASSETLOCCIPR",
            "remarks": "Asset record for the multiassetlocciPR.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "source": "MULTIASSETLOCCIPR",
            "remarks": "Relationship to the Asset table, used to find this MultiAssetLocCIPr's linear Asset. (multiassetloccipr.assetnum=asset.assetnum and multiassetloccipr.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "NAMEDUSERS",
            "remarks": "Relationship to the Asset table, used to find asset  records for a given nameduser. (namedusers.assetnum = asset.assetnum and namedusers.orgid = asset.orgid). The resulting set will contain zero, one or more than one object.",
            "whereClause": "assetnum = :assetnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCJPDATASHEETASSET",
            "source": "PLUSCJPDATASHEET",
            "remarks": "Relationship between PLUSCJPDATASHEET and Asset",
            "whereClause": "assetnum = :assetnum",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "PLUSCSPOTCHECK",
            "remarks": null,
            "whereClause": "assetnum = :assetnum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSASSET",
            "source": "PLUSCWODS",
            "remarks": null,
            "whereClause": "assetnum=:assetnum and orgid=:orgid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCDSINSTRASSET",
            "source": "PLUSCWODSINSTR",
            "remarks": null,
            "whereClause": "assetnum = :assetnum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSALASSET",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "assetnum in (select assetnum from pluscdsassetlink where dsplannum = :dsplannum) and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "ALLASSETS",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ACTIVEASSET",
            "source": "PM",
            "remarks": "Relationship to the PM's asset records, used to find the active asset records for a given PM. (asset.assetnum = pm.assetnum and asset.siteid=pm.siteid and status not in (select value from synonymdomain where maxvalue in (DECOMMISSIONED) and domainid=LOCASSETSTATUS). The resulting set will contain zero or one record.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid and status not in (select value from synonymdomain where maxvalue in ('DECOMMISSIONED') and domainid='LOCASSETSTATUS')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "PM",
            "remarks": "Relationship to the PM's asset records, used to find the asset records for a given PM. (asset.assetnum = pm.assetnum). The resulting set will contain zero or one record.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETNOTREADY",
            "source": "PM",
            "remarks": "Relationship to the PM's asset records, used to find the not ready asset records for a given PM. (asset.assetnum = pm.assetnum and asset.siteid=pm.siteid and status not in (select value from synonymdomain where maxvalue in (NOT READY) and domainid=LOCASSETSTATUS). The resulting set will contain zero or one record.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid and status in (select value from synonymdomain where maxvalue in ('NOT READY') and domainid='LOCASSETSTATUS')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSOCASSET",
            "source": "PM",
            "remarks": "Relationship to MasterPMItem's asset records, used to find all the associated asset records for this rotating item on Master PM record. (:applymasterpmtoasset=:yes and itemnum =:masterpmitemnum and assetnum not in(select assetnum from pm where masterpm=:pmnum and assetnum is not null) and asset.itemsetid = pm.itemsetid). The resulting set will contain zero to many records.",
            "whereClause": ":applymasterpmtoasset=:yes and itemnum =:masterpmitemnum and assetnum not in(select assetnum from pm where masterpm=:pmnum and assetnum is not null) and itemsetid = :itemsetid and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "source": "PM",
            "remarks": "Relationship to the Asset table, used to find this PM's linear Asset. (pm.assetnum=asset.assetnum and pm.siteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "POLINE",
            "remarks": "Relationship to Asset for RecHover in PO  / PO Lines tab / PO Lines table details",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "PRLINE",
            "remarks": "Relationship to Asset for RecHover in PR  / PR Lines tab / PR Lines table details",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "RECONASSETLINK_ASSET",
            "source": "RECONASSETLINK",
            "remarks": "Relationship to the ASSET object, used to find the ASSET record for the reconassetlink based on the assetnum.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ANCESTORASSET",
            "source": "RECONASSETRESULT",
            "remarks": "Relationship to the ASSET table, used to find the ASSET record for the reconassetresult based on the ancestorassetnum.",
            "whereClause": "assetnum=:ancestorassetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "RECONASSETRESULT",
            "remarks": "Relationship to the ASSET object, used to find the ASSET record for the reconassetresult based on the assetnum.",
            "whereClause": "assetnum=:assetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VDPACOLLECT",
            "source": "RECONASSETRESULT",
            "remarks": "Relationship to the ASSET table, used to find the ASSET record for the RECONASSETRESULT based on the assetnum. (ASSET.assetnum = RECONASSETRESULT.assetnum)",
            "whereClause": "assetnum=:assetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWDPA",
            "source": "RECONASSETRESULT",
            "remarks": "Relationship to the ASSET table, used to find the ASSET record for the RECONASSETRESULT based on the assetnum. (ASSET.assetnum = RECONASSETRESULT.assetnum)",
            "whereClause": "assetnum=:assetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWDPARELHIS",
            "source": "RECONASSETRESULT",
            "remarks": "Relationship to the ASSET table, used to find the ASSET record for the RECONASSETRESULT based on the assetnum. (ASSET.assetnum = RECONASSETRESULT.assetnum)",
            "whereClause": "assetnum=:assetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINK_ASSET",
            "source": "RECONLINK",
            "remarks": "Asset for a Reconciliation Link",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TLOAMASSETLINK",
            "source": "RECONLINK",
            "remarks": "Link between RECONLINK and ASSET",
            "whereClause": "assetid=:assetid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "RECONMULTILINK",
            "remarks": "Relationship from reconmultilink to asset",
            "whereClause": "assetid=:assetid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "RFQLINE",
            "remarks": "Relationship to Asset for RecHover in RFQ  / RFQ Lines tab / RFQ Lines table details",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "ROUTE_STOP",
            "remarks": "Relationship to location from route_stop will return 0 or 1 object.",
            "whereClause": "assetnum=:assetnum and siteid=:assetlocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "source": "ROUTE_STOP",
            "remarks": "Relationship to the Asset table, used to find this Route Stop's linear Asset. (route_stop.assetnum=asset.assetnum and route_stop.assetlocsiteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:assetlocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLASSETS",
            "source": "ROUTES",
            "remarks": null,
            "whereClause": "siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLASSETSNOSITES",
            "source": "ROUTES",
            "remarks": "Select all assets from all sites",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "SAFETYLEXICON",
            "remarks": "Relationship to psdi.app.asset. Asset (asset.assetnum = safetylexicon.assetnum). Used to find the asset that is associated with this hazard or tagout. If assetnum is not null, the result set will contain one object.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "SCHEDULELINE",
            "remarks": "Relationship to the Asset table, used to find all asset for a given schedule line. (scheduleline.assetnum=asset.assetnum and scheduleline.orgid=asset.orgid)",
            "whereClause": "assetnum = :assetnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "SERVICEADDRESS",
            "remarks": "Asset in Service Address",
            "whereClause": "saddresscode = :addresscode and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "SFWVIEWLINE",
            "remarks": "Relationship to the contractline table.(cotractline.itemnum=asset.itemnum and cotractline.itemsetid=asset.itemsetid)",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "SKDPROJECT",
            "remarks": "To get the Assets for a Schedule's Assets table.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "SKDQUERY",
            "remarks": "To get the Assets for a Schedule's Assets table.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "SLAASSETLOCDESC",
            "source": "SLAASSETLOC",
            "remarks": "Relationship to the Asset table, used to find the Asset records for a given SLAAssetLoc. (slaassetloc.assetnum = asset.assetnum). The resulting set will contain 0 or 1 object.",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROTASSET",
            "source": "SPLITUSELINE",
            "remarks": "Relationship to the Asset table, used to find the asset for the splituseline. The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:fromstoreloc and itemsetid=:itemsetid and siteid=:siteid and (conditioncode is null or conditioncode=:fromconditioncode)",
            "cardinality": null
        },
        {
            "name": "ASSETCHILD",
            "source": "SPRELATEDASSET",
            "remarks": "Relationship to Asset table. (asset.assetnum = sprelatedasset.relatedasset). Finds the related asset. The result set will contain one object.",
            "whereClause": "assetnum = :relatedasset and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETPARENT",
            "source": "SPRELATEDASSET",
            "remarks": "Relationship to Asset table. (asset.assetnum = sprelatedasset.assetnum). Finds the parent asset. The result set will contain one object.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "TAGOUT",
            "remarks": "Relationship to Asset table. (asset.assetnum = tagout.assetnum). If assetnum is not null, the result set will contain one object.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "assetnum=:assetnum and siteid=:assetsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "source": "TICKET",
            "remarks": "Relationship to the Asset table, used to find this Ticket's linear Asset. (ticket.assetnum=asset.assetnum and ticket.assetsiteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:assetsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "TLOAMPROMOTE",
            "remarks": "Relationship from Computer Promotion to Assets. Returns zero or one record.",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "TLOAMASSETLINEAGE",
            "source": "TLOAMSOFTWARE",
            "remarks": "The asset linked to a software catalog entry where instances of that software have been found. If this is a partition, the query returns also all partition parents and the computer where the partition has been found",
            "whereClause": "exists (select 1 from reconlink where exists (select 1 from tloamdpaancestor where exists (select 1 from tloamvdpasoftware where (tloamvdpasoftware.tloamproductid = :tloamsoftwareid or exists (select 1 from tloamsoftware where tloamsoftware.targetsoftwareid = :tloamsoftwareid and tloamsoftware.tloamsoftwareid = tloamvdpasoftware.tloamsoftwareid)) and tloamdpaancestor.nodeid=tloamvdpasoftware.nodeid) and tloamdpaancestor.ancestor=reconlink.nodeid) and reconlink.assetnum=asset.assetnum and reconlink.siteid=asset.siteid)",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "TOOLITEM",
            "remarks": null,
            "whereClause": "itemnum = :itemnum",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "TOOLTRANS",
            "remarks": "Relationship to the Asset table, used to find the asset record for the given tool transaction. (asset.assetnum = tooltrans.assetnum). The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "VIEWWOPMS",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "WARRANTYASSET",
            "remarks": "Relationship to the Asset table, used to find all asset for a given contract asset. (warrantyasset.assetid=asset.assetid and moved=no). The resulting set will contain zero or one object.",
            "whereClause": "assetid=:assetid and moved=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUERYASSET",
            "source": "WARRANTYASSET",
            "remarks": "Relationship to the Asset table, used to find all assets for a given contract asset. (warrantyasset.assetid=asset.assetid). The resulting set will contain zero or one object.",
            "whereClause": "assetid=:assetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WHEREUSEDASSET",
            "source": "WHEREUSED",
            "remarks": "Relationship to the WhereUsed table, used to find the items in the virtual WhereUsed table for a given item. (Whereused.assetnum = Asset.assetnum). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship to the Asset Table; used to find Assets that are related to the Work Orders of a set of WMAssignments.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOASSETSTOMOVE",
            "source": "WOASSETSTOMOVE",
            "remarks": "Relationship from the WOASSETSTOMOVE table to the asset table. (No where clause). The resulting set will contain zero or more objects. Note: This relationship is used to create assets to add to a list used to generate move asset workorder tasks",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "WOCONTRACT",
            "remarks": null,
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "WOGENFORECAST",
            "remarks": "Relationship to the Asset Mbo for the assetnum referenced on this Mbo One or zero members.",
            "whereClause": "assetnum= :assetnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "WOLINEARSEARCH",
            "remarks": "Relationship to wolinearsearch asset will return 0 or 1 object",
            "whereClause": "assetnum=:assetnum and siteid=:assetlocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINEARASSET",
            "source": "WOLINEARSEARCH",
            "remarks": "Relationship to the Asset table, used to find the asset for this WOLINEARSEARCH object. (asset.assetnum=wolinearsearch.assetnum and asset.siteid=wolinearsearch.assetlocsiteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:assetlocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_ASSET",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "LINEARASSET",
            "source": "WORKORDER",
            "remarks": "Relationship to the Asset table, used to find this WorkOrder's linear Asset. (workorder.assetnum=asset.assetnum and workorder.assetsiteid=asset.siteid). The resulting set will contain one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOALLASSETS",
            "source": "WORKORDER",
            "remarks": "Relationship to the workorder's asset records, used to find the asset records for a given workorder and its children.",
            "whereClause": "(assetnum=:assetnum or assetnum in (select assetnum from workorder where parent=:wonum and assetnum is not null)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "WORKORDER",
            "remarks": "Relationship to the Asset table, used to find the asset for a work order. (Asset.assetnum = Workorder.assetnum). This resulting set will contain zero or one object. If the workorder's Assetnum attribute isn't null, this set will have one member.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLASSETS",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "siteid=:siteid and status not in (select value from synonymdomain where maxvalue ='DECOMMISSIONED' and domainid='LOCASSETSTATUS')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "source": "WOSAFETYLINK",
            "remarks": "Relationship to Asset for RecHover in Wotrack  / Safety Plan tab / WoHazPrec_table",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "source": "WOTAGLOCK",
            "remarks": "Relationship to Asset for RecHover in Wotrack  / Safety Plan tab / WoLockOut_table",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCASSET",
            "source": "WPTOOL",
            "remarks": null,
            "whereClause": "assetnum = :plusassetnum",
            "cardinality": null
        }
    ]
}