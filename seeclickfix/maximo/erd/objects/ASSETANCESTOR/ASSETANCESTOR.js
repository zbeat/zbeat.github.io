mos = {
    "objectName": "ASSETANCESTOR",
    "className": "psdi.app.asset.AssetAncestorSet",
    "description": "Asset Ancestor",
    "longDescription": "This is the ancestor table for Assets. More information about ancestor tables <a href=\"../../extra/AncestorTables.html\">here.</a> ",
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASSETANCESTORID",
    "primaryKeyColumns": [
        "SITEID",
        "ASSETNUM",
        "ANCESTOR"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "ORGANIZATION",
            "targetObject": "ASSETANCESTOR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETANCESTOR",
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
            "attributeName": "ASSETANCESTORID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "AssetNum Identifier",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ANCESTOR",
            "required": true,
            "persistent": true,
            "title": "Ancestor",
            "remarks": "AssetNum of Ancestor Asset",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
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
            "title": "organization",
            "remarks": "org Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "HIERARCHYLEVELS",
            "required": true,
            "persistent": true,
            "title": "Hierarchy Level",
            "remarks": "Number of hierarchy levels between Asset and Ancestor Asset",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DOESASSETANCESTOREXIST",
            "source": "ASSET",
            "remarks": "Relationship to the assetancestor records, used to see if this asset's proposed new parent is already a child of this asset. The result will be one or zero records.  (assetancestor.assetnum=asset.newparent and assetancestor.ancestor=asset.assetnum and assetancestor.siteid=asset.siteid)",
            "whereClause": "assetnum=:newparent and ancestor=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETANCESTOR",
            "source": "ASSET",
            "remarks": "Relationship to the assetancestor records, used to find the assetancestor records for a given asset.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETANCESTOR",
            "source": "CI",
            "remarks": "Relationship to the assetancestor records, used to find the assetancestor records for a given ci.",
            "whereClause": "assetnum = :assetnum and siteid = :assetlocsiteid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETANCESTORANCESTORS",
            "source": "VIEWWOPMS",
            "remarks": "Relationship from VIEWWOPMS to the ASSETANCESTOR object, used to see if the VIEWWOPMS asset has any ancestors.  The result set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and assetnum=:assetnum and ancestor!=assetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETANCESTORCHILDREN",
            "source": "VIEWWOPMS",
            "remarks": "Relationship from VIEWWOPMS to the ASSETANCESTOR object, used to see if any children assets exist for the VIEWWOPMS asset.  The result set will contain zero or more objects.",
            "whereClause": "siteid=:siteid and ancestor=:assetnum and ancestor!=assetnum",
            "cardinality": "UNDEFINED"
        }
    ]
}