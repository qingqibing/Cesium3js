function cameras() {

    return {
        "cameras": {
            "perspectiveCamera_id": {
                "name": "user-defined name of perspective camera",
                "perspective": {
                    "aspectRatio": 1.77,
                    "yfov": 0.7854,
                    "zfar": 1000,
                    "znear": 1
                },
                "type": "perspective",
                "extensions": {
                    "extension_name": {
                        "extension specific": "value"
                    }
                },
                "extras": {
                    "Application specific": "The extra object can contain any properties."
                }
            },
            "orthographicCamera_id": {
                "name": "user-defined name of orthographic camera",
                "orthographic": {
                    "xmag": 0.5,
                    "ymag": 0.5,
                    "zfar": 1000,
                    "znear": 1
                },
                "type": "orthographic",
                "extensions": {
                    "extension_name": {
                        "extension specific": "value"
                    }
                },
                "extras": {
                    "Application specific": "The extra object can contain any properties."
                }
            }
        }
    }
}