({
    name: "Serial MP3", // Category Name
    description: "Play MP3 with OpenSmart Serial MP3 Player",
    author: "IOXhop.com",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#E74C3C", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="mp3_begin">
                    <field name="tx_pin">26</field>
                    <field name="rx_pin">27</field>
                </block>
            `
        },
        {
            xml: `
                <block type="mp3_play_index">
                    <value name="index">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "mp3_is_playing",
        "mp3_wait_play_end",
        {
            xml: `
                <block type="mp3_set_volume">
                    <value name="level">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "mp3_pause",
        "mp3_resume",
        "mp3_stop",
        "mp3_next",
        "mp3_previous",
    ]
});
