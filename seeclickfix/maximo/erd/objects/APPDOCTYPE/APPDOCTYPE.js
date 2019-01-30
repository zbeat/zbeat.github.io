mos = {
    "objectName": "APPDOCTYPE",
    "className": "psdi.app.doclink.AppDoctypeSet",
    "description": "Identifies DocType available for application use.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "APPDOCTYPEID",
    "primaryKeyColumns": [
        "APP",
        "DOCTYPE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DOCTYPES",
            "targetObject": "APPDOCTYPE",
            "parentKeys": "DOCTYPE",
            "targetKeys": "DOCTYPE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Document Type",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "APPDOCTYPE",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "The name of the record's application to which a user has attached document.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "DOCTYPE",
            "required": true,
            "persistent": true,
            "title": "Document Folder",
            "remarks": "The name of a folder assigned by a user that is associated with this application.",
            "sameAsAttribute": "DOCTYPE",
            "sameAsObject": "DOCTYPES"
        },
        {
            "attributeName": "APPDOCTYPEID",
            "required": true,
            "persistent": true,
            "title": "APPDOCTYPEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSELECTED",
            "required": true,
            "persistent": false,
            "title": "Selected",
            "remarks": "Non-persistent column used in Comm Template doc folder.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DOCINFO",
            "target": "DOCINFO",
            "remarks": "Relationship to Docinfo table. (docinfo.doctype = appdoctype.doctype). The result set will contain zero or more objects.",
            "whereClause": "doctype = :doctype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to Doclinks table. (doclinks.doctype = appdoctype.doctype). The result set will contain zero or more objects.",
            "whereClause": "doctype = :doctype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCTYPES",
            "target": "DOCTYPES",
            "remarks": "Relationship to Doctypes table. (doctypes.doctype = appdoctype.doctype). The result set will contain one object.",
            "whereClause": "doctype = :doctype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relationship to MaxApps table. (maxapps.app = appdoctype.app). The result set will contain one object.",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "APPDOCTYPE",
            "source": "COMMTEMPLATEDOCS",
            "remarks": "Relationship to get all a app doc type related to a COMMTEMPLATEDOCS record.",
            "whereClause": "doctype=:doctype and app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "APPDOCTYPE",
            "source": "DOCTYPES",
            "remarks": "Relationship to AppDoctype table. (appdoctype.doctype = doctypes.doctype). The result set will contain zero or more objects.",
            "whereClause": "doctype = :doctype",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "APPDOCTYPE",
            "source": "MAXAPPS",
            "remarks": "Relationship to AppDoctype table by app, used to find document types for an application. ( appdoctype.app = maxapps.app ). This relationship will find 1 or more objects.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        }
    ]
}