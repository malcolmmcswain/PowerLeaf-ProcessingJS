var script = {
    minus: {
        action: cloud.data.minus.number.one - cloud.data.minus.number.two
    },
    sayhello: {
        action: cloud.data.sayhello.display.message
    },
    comment: {
        action: cloud.data.messages.display.comment[0]
    }
};
