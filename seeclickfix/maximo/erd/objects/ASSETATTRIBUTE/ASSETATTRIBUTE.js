mos = {
    "objectName": "ASSETATTRIBUTE",
    "className": "psdi.app.assetcatalog.AssetAttributeSet",
    "description": "Attribute or property of an Asset(Item;As;Loc)",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASSETATTRIBUTEID",
    "primaryKeyColumns": [
        "ASSETATTRID",
        "ORGID",
        "SITEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "ASSETFEASPECHIST",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "LINKEDTOATTRIBUTE, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "ASSETFEATURESPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "LINKEDTOATTRIBUTE, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "ASSETSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "ASSETSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "LINKEDTOATTRIBUTE, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "ASSETSPECHIST",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "LINKEDTOATTRIBUTE, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ATTRIBUTE, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ATTRIBUTE, ORGID, WORKSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ATTRIBUTE, WORKORGID, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ATTRIBUTE, WORKORGID, WORKSITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "CLASSSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Specification",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "CLASSSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "LINKEDTOATTRIBUTE, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Class Specification",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "CLASSSPECUSEWITH",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "JOBPLANSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "JOBPLANSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "LINKEDTOATTRIBUTE, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "JOBTASKSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ATTRIBUTENAME, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ATTRIBUTENAME, ORGID, SITEID1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ATTRIBUTENAME, ORGID1, SITEID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ATTRIBUTENAME, ORGID1, SITEID1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "LINKEDTOATTRIBUTE, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "PDSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "TICKETSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "TICKETSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "LINKEDTOATTRIBUTE, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "WORKORDERSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "ASSETATTRID, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Attribute",
            "longDescription": null
        },
        {
            "objectName": "ASSETATTRIBUTE",
            "targetObject": "WORKORDERSPEC",
            "parentKeys": "ASSETATTRID, ORGID, SITEID",
            "targetKeys": "LINKEDTOATTRIBUTE, ORGID, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Asset Attribute",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "ASSETATTRIBUTE",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETATTRIBUTE",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "MEASUREUNITID, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "ASSETATTRIBUTE",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "MEASUREUNITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSETATTRIBUTE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETATTRIBUTE",
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
            "attributeName": "ASSETATTRID",
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Asset Attribute Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the classification attribute",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATATYPE",
            "required": true,
            "persistent": true,
            "title": "Data Type",
            "remarks": "Data type specified for this classification attribute",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "Default Units for the attribute",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "DOMAINID",
            "required": false,
            "persistent": true,
            "title": "Domain",
            "remarks": "Default Domain for the attribute",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "ATTRDESCPREFIX",
            "required": false,
            "persistent": true,
            "title": "Prefix",
            "remarks": "Default Prefix Used with Attribute in Generated Asset Descriptions",
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
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ASSETATTRIBUTEID",
            "required": true,
            "persistent": true,
            "title": "ASSETATTRIBUTEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSETSPEC",
            "target": "ASSETSPEC",
            "remarks": "Relationship to the AssetSpec table, used to find all asset specification records for a given asset attribute. (assetspec.assetattrid = assetattribute.assetattrid). The resulting set will contain zero or more objects.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification  records that use the given asset attribute. (classspec.assetattrid = assetattribute.assetattrid). The resulting set will contain zero or more objects.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPEC",
            "target": "ITEMSPEC",
            "remarks": "Relationship to the ItemSpec table, used to find all item specification records for a given asset attribute. (itemspec.assetattrid = assetattribute.assetattrid). The resulting set will contain zero or more objects.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONSPEC",
            "target": "LOCATIONSPEC",
            "remarks": "Relationship to the LocationSpec table, used to find all location specification records for a given asset attribute. (locationspec.assetattrid = assetattribute.assetattrid). The resulting set will contain zero or more objects.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ASSETATTRIBUTE",
            "source": "ACTCISPEC",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given actual configuration item (actcispec.assetattrid=assetattribute.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid = :assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "ASSETFEASPECHIST",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given asset feature specification history (assetfeaspec.assetattrid=assetattribute.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid = :assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "ASSETFEATURESPEC",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given assetfeaturespec(assetfeaturespec.assetattrid=assetattribute.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid = :assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DFLTASSETATTRID",
            "source": "ASSETMODIFYDFLT",
            "remarks": "Relationship to the assetattribute records, used to find the assetattribute record.",
            "whereClause": "assetattrid=:dfltassetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "ASSETSPEC",
            "remarks": "Relationship to the AssetAttribute table, used to find all asset attributes for a given asset specification. (assetattribute.assetattrid = assetspec.assetattrid).  This resulting set will contain zero or one object.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "ASSETSPECHIST",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given asset specification history (assetspechist.assetattrid=assetattribute.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid = :assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "AUTOATTRUPDATE",
            "remarks": null,
            "whereClause": "assetattrid=:attribute",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "CISPEC",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given configuration item (cispec.assetattrid=assetattribute.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid = :assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "CISPECHIS",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given configuration item specification history (cispechis.assetattrid=assetattribute.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid = :assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "CLASSSPEC",
            "remarks": "Relationship to the AssetAttribute table, used to find the asset attribute for a given class specification record. (assetattribute.assetattrid = classspec.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattributeid=:assetattributeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the assetattribute table, used to find all assetattribute records for a given orgnization. (assetattribute.orgid = classstructure.orgid). The resulting set will contain zero or objects.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "FEATURESPEC",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given featurespec. (featurespec.assetattrid=assetattribute.assetattrid) The resulting set will contain one object.",
            "whereClause": "assetattrid= :assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "ITEMSPEC",
            "remarks": "Relationship to the AssetAttribute table, used to find an asset attribute record for a given item specification. (itemspec.assetattrid = assetattribute.assetattrid). The resulting set will contain zero or one object.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "JOBPLANSPEC",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given jobplan(jobplanspec.assetattrid=assetattribute.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid = :assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "JOBTASKSPEC",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given job task (jobtaskpec.assetattrid=assetattribute.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid = :assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "LOCATIONSPEC",
            "remarks": "Relationship to the AssetAttribute table, used to find the attribute of a given location specification. (locationspec.assetattrid = assetattribute.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the AssetAttribute table, used to find the asset attributes for a given measure unit. (assetattribute.measureunitid = measureunit.assetattrid). The resulting set will contain zero or more objects.",
            "whereClause": "measureunitid=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "PDSPEC",
            "remarks": "Relationship to the AssetAttribute table, used to find the asset attribute for a given class specification record. (assetattribute.assetattrid = classspec.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "PLUSCTPSPEC",
            "remarks": "relationship to the assetattribute table (plusctpspec.assetattrid = assetattribute.assetattrid)",
            "whereClause": "assetattrid = :assetattrid",
            "cardinality": null
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "RECONASSETRESULT",
            "remarks": "Relationship to the ASSETATTRIBUTE table, used to find the ASSETATTRIBUTE for the RECONRESULT. The resulting set will contain one object.",
            "whereClause": "assetattrid=:authattribute",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONATTRCLAUSE_ASSETATTRIBUTEDESC",
            "source": "RECONATTRCLAUSE",
            "remarks": "Relationship to the ASSETATTRIBUTE table, used to find classstructureid attribute description",
            "whereClause": "assetattrid=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRAST_ASSETATTRIBUTEDESC",
            "source": "RECONCOMPFLTRAST",
            "remarks": "Relationship to the ASSETATTRIBUTE table, used to find classstructureid attribute description",
            "whereClause": "assetattrid=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCOMPFLTRDPA_ASSETATTRIBUTEDESC",
            "source": "RECONCOMPFLTRDPA",
            "remarks": "Relationship to the ASSETATTRIBUTE table, used to find classstructureid attribute description",
            "whereClause": "assetattrid=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONLINKCLAUSE_ASSETATTRIBUTEDESC",
            "source": "RECONLINKCLAUSE",
            "remarks": "Relationship to the ASSETATTRIBUTE table, used to find classstructureid attribute description",
            "whereClause": "assetattrid=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONRCDCLAUSE_ASSETATTRIBUTEDESC",
            "source": "RECONRCDCLAUSE",
            "remarks": "Relationship to the ASSETATTRIBUTE table, used to find classstructureid attribute description",
            "whereClause": "assetattrid=:assetattributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "RECONRESULT",
            "remarks": "Relationship to the ASSETATTRIBUTE table, used to find the ASSETATTRIBUTE for the RECONRESULT. The resulting set will contain one object.",
            "whereClause": "authattribute= :assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "SOLUTIONSPEC",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given solution (solutionspec.assetattrid=assetattribute.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid = :assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "TICKETSPEC",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given ticket. (ticketspec.assetattrid=assetattribute.assetattrid) The resulting set will contain one object.",
            "whereClause": "assetattrid=:assetattrid and ((orgid=:orgid and siteid=:siteid) or (orgid=:orgid and siteid is null) or (orgid is null and siteid is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "TKTEMPLATESPEC",
            "remarks": "Relationship to the AssetAttribute table, used to find the asset attribute for a given class specification record. (assetattribute.assetattrid = classspec.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "TKTEMPLTACTYSPEC",
            "remarks": "Relationship to the AssetAttribute table, used to find the asset attribute for a given class specification record. (assetattribute.assetattrid = classspec.assetattrid). The resulting set will contain one object.",
            "whereClause": "assetattrid=:assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "source": "WORKORDERSPEC",
            "remarks": "Relationship to the assetattribute table, used to find the assetattribute record for a given workorderspec. (workorderspec.assetattrid=assetattribute.assetattrid) The resulting set will contain one object.",
            "whereClause": "assetattrid= :assetattrid",
            "cardinality": "UNDEFINED"
        }
    ]
}