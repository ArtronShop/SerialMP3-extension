({
    name: "Serial MP3", // Category Name
    description: "Play MP3 with OpenSmart Serial MP3 Player",
    author: "IOXhop.com",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#E74C3C", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "mp3_begin",
        {
            xml: `
                <block type="mp3_play_index">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "mp3_is_playing",
        "mp3_wait_play_end",
        "mp3_set_volume",
        "mp3_pause",
        "mp3_resume",
        "mp3_stop",
        "mp3_next",
        "mp3_previous",
    ]
});
