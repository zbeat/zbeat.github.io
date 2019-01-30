mos = {
    "objectName": "AMCREWTOOLUNRESTRICTED",
    "className": "com.ibm.tivoli.maximo.amcrew.app.virtual.AMCrewToolUnRestrictedSet",
    "description": "Unrestricted Tool Assignments Dialog",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "AMCREW",
            "required": true,
            "persistent": false,
            "title": "Crew",
            "remarks": "Crew Id",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "TOOLSEQ",
            "required": true,
            "persistent": false,
            "title": "Tool Sequence",
            "remarks": "Identifies the generic title of a required tool for the crew. The resource identifier must be unique within the crew in an organization. For example, if two  vehicles are needed for a crew, the generic titles might be vehicle1 and vehicle2.",
            "sameAsAttribute": "TOOLSEQ",
            "sameAsObject": "AMCTTOOL"
        },
        {
            "attributeName": "EFFECTIVEDATE",
            "required": true,
            "persistent": false,
            "title": "Effective Date",
            "remarks": "Start date of the tool's assignment to the crew.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "End Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": false,
            "title": "Asset",
            "remarks": "Identifies the specific asset assigned to meet the tool requirement.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Tool Number",
            "remarks": "Indentifies the inventory number for this tool. Click the Detail Menu button to view a list of valid tools, search for a tool by classification, or view a tool's availability.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": false,
            "title": "Set ID",
            "remarks": "Indentifies the Item Set ID for this tool.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": false,
            "title": "Site",
            "remarks": "Site of the Asset",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "TOASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Replacement Asset",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "RETURNDATE",
            "required": false,
            "persistent": false,
            "title": "Return Date",
            "remarks": "Start date of the asset's return to the crew.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGENDDATE",
            "required": false,
            "persistent": false,
            "title": "Original End Date",
            "remarks": "Date the asset's original assignment to the crew ends.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREWTOOLASSET",
            "target": "AMCREWTOOL",
            "remarks": "Finds assets to find possible conflicts before creating an unrestrictedtool",
            "whereClause": "assetnum=:assetnum siteid=:siteid and (enddate>=:effectivedate or enddate is null)",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship from AMCREWTOOLUNRESTRICTED to ASSET",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "TOASSET",
            "target": "ASSET",
            "remarks": "Relationship between AMCREWTOOLUNRESTRICTED and ASSET tables.",
            "whereClause": "assetnum = :toassetnum and siteid=:siteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCREWTOOLUNRESTRICTED",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREWTOOLUNRESTRICTED and AMCREW",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLUNRESTRICTED",
            "source": "DAILYCREWREASSIGN",
            "remarks": "Realtionship to AMCREWTOOLUNRESTRICTED",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}