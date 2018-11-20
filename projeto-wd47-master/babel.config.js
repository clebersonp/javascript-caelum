const preset = [
    ["@babel/preset", {
        target: {
            chrome: "58",
            ie: "11"
        },
        useBuiltIns:"usage"
    }]
]

module.export={preset}