mos = {
    "objectName": "AMCREWLABUNRESTRICTED",
    "className": "com.ibm.tivoli.maximo.amcrew.app.virtual.AMCrewLabUnRestrictedSet",
    "description": "Unrestricted Labor Assignments Dialog",
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
            "attributeName": "POSITION",
            "required": true,
            "persistent": false,
            "title": "Position",
            "remarks": "The specific role on the crew for the labor resource.",
            "sameAsAttribute": "POSITION",
            "sameAsObject": "AMCTCRAFT"
        },
        {
            "attributeName": "LABORCODE",
            "required": true,
            "persistent": false,
            "title": "Labor",
            "remarks": "Identifies the labor filling the required crew position. Labor can be assigned to only one crew at a time. Maximo displays a warning if the labor you choose for a position does not have any of the following: the craft, skill level, or qualification specified for the crew, or the availability that the crew's calendar and shift require.",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "CRAFT",
            "required": true,
            "persistent": false,
            "title": "Craft",
            "remarks": "Craft",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT"
        },
        {
            "attributeName": "SKILLLEVEL",
            "required": false,
            "persistent": false,
            "title": "Skill Level",
            "remarks": "The level of skill or expertise in a particular craft. You can assign a labor code with a skill level other than the specified one for the position.",
            "sameAsAttribute": "SKILLLEVEL",
            "sameAsObject": "CRAFTSKILL"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": false,
            "title": "Vendor",
            "remarks": "Identifies the vendor supplying the outside labor, if any.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": false,
            "title": "Labor Contract",
            "remarks": "Identifies the vendor's contract number for the craft.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "EFFECTIVEDATE",
            "required": true,
            "persistent": false,
            "title": "Effective Date",
            "remarks": "Start date of the labor code's assignment to the crew.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "Date the labor code's crew  assignment ends.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organizationorgan",
            "remarks": "Organization Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "TOLABORCODE",
            "required": false,
            "persistent": false,
            "title": "Labor",
            "remarks": "Replacement labor code",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "RETURNDATE",
            "required": false,
            "persistent": false,
            "title": "Return Date",
            "remarks": "Start date of the labor code's return assignment to the crew.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGENDDATE",
            "required": false,
            "persistent": false,
            "title": "Original End Date",
            "remarks": "Date the labor code's crew original assignment ends.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LABOR",
            "target": "LABOR",
            "remarks": "Relationship between AMCREWLABUNRESTRICTED and LABOR tables.",
            "whereClause": "laborcode = :laborcode and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "TOLABOR",
            "target": "LABOR",
            "remarks": "Relationship between AMCREWLABUNRESTRICTED and LABOR tables.",
            "whereClause": "laborcode = :tolaborcode and orgid = :orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCREWLABUNRESTRICTED",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREWLABUNRESTRICTED and AMCREW",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "AMCREWLABUNRESTRICTED",
            "source": "DAILYCREWREASSIGN",
            "remarks": "Realtionship to AMCREWLABUNRESTRICTED",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}