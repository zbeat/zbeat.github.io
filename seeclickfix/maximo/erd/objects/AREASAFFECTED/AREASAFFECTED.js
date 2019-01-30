mos = {
    "objectName": "AREASAFFECTED",
    "className": "psdi.app.workorder.WOAreasAffectedSet",
    "description": "The Areas Affected table.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AREASAFFECTEDID",
    "primaryKeyColumns": [
        "SITEID",
        "WONUM",
        "AREASAFFECTEDID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "LANGUAGE",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "AFFECTEDSITE, AFFECTEDLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Affected Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, AFFECTEDLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "PERSONID",
            "targetKeys": "CONTACT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contact",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CONTACTGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group to Contact when area is affected.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "SITEID",
            "targetKeys": "AFFECTEDSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "AFFECTEDSITE, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Areas Affected by Work Order",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "AREASAFFECTEDID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Identifies the work order record that has areas affected defined.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes an area affected other than a site, service, location or asset. To enter or view additional information, click the Long Description button. If an Asset, Location, Site or Service is entered, this field will display the description for that entry and will be read-only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTACT",
            "required": false,
            "persistent": true,
            "title": "Contact",
            "remarks": "Identifies the contact person responsible for the affected area.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CONTACTGROUP",
            "required": false,
            "persistent": true,
            "title": "Contact Group",
            "remarks": "Identifies the contact group responsible for the affected area.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "NOTIFY",
            "required": true,
            "persistent": true,
            "title": "Notify",
            "remarks": "Specifies whether or not the Contact or Contact Group must be notified before the change or release is implemented. If the check box is selected (the default), the contact or contact group must be notified of the change or release before it can happen. If the check box is cleared, notification is not required.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPROVE",
            "required": true,
            "persistent": true,
            "title": "Approve",
            "remarks": "Specifies whether or not the Contact or Contact Group is required to approve the change or release. If the check box is selected (the default), the contact or contact group must approve the change or release before it can happen. If the check box is cleared, no approval is necessary.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "AFFECTEDSITE",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site affected by the change or release.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "AFFECTEDCOMMODITY",
            "required": false,
            "persistent": true,
            "title": "Service",
            "remarks": "Identifies a service affected by the change or release.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "AFFECTEDLOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Identifies the location affected by the change or release.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "AFFECTEDASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the asset affected by the change or release.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
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
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AFFECTEDASSETNUM",
            "target": "ASSET",
            "remarks": "Relationship from Areas Affected Assetnum to the ASSET table - used to get asset description.",
            "whereClause": "assetnum=:affectedassetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCCOMM",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commodity=:affectedcommodity and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTYPECOMM",
            "target": "ASSETLOCCOMM",
            "remarks": null,
            "whereClause": "commodity=:affectedcommodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMCI",
            "target": "CI",
            "remarks": "Relationship from Areas Affected Service field to the CI table - used to View Related Records for Service.",
            "whereClause": "service=:affectedcommodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AFFECTEDCOMMODITY",
            "target": "COMMODITIES",
            "remarks": "Relationship from Areas Affected Commodity to the Commodities table - used to get commodity description.",
            "whereClause": "commodity=:affectedcommodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTCOMMODITY",
            "target": "CONTCOMMODITY",
            "remarks": null,
            "whereClause": "commodity=:affectedcommodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the AREASAFFECTED to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AFFECTEDLOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship from Areas Affected Location to the Locations table - used to get location description.",
            "whereClause": "location=:affectedlocation",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AFFECTEDSITE",
            "target": "SITE",
            "remarks": "Relationship from Areas Affected Site to the Site table - used to get site description.",
            "whereClause": "siteid=:affectedsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMSLA",
            "target": "SLA",
            "remarks": null,
            "whereClause": "commodity=:affectedcommodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMTICKET",
            "target": "TICKET",
            "remarks": "Relationship from Areas Affected Service field to the TICKET table - used to View Related Records for Service.",
            "whereClause": "commodity=:affectedcommodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the AREASAFFECTED to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field    .",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "COMMWO",
            "target": "WORKORDER",
            "remarks": null,
            "whereClause": "commodity=:affectedcommodity",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "AREASTOAPPROVE",
            "source": "WOCHANGE",
            "remarks": null,
            "whereClause": ":wonum=wonum and :siteid=siteid and approve=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AREASTONOTIFY",
            "source": "WOCHANGE",
            "remarks": null,
            "whereClause": ":wonum=wonum and :siteid=siteid and notify=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_AREASAFFECTED",
            "source": "WORKORDER",
            "remarks": "Relationship from the WO table to its children Areas Affected.",
            "whereClause": "wonum=:wonum and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}