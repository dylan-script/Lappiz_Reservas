debugger;
$('body > app-root > app-base > div > div > div > div > app-forms > div > div > div > div > div.header-section > div.title-section').css('margin-left', '30%')
setTimeout(function () {
    $("#4d8ae22d-7336-48d0-93ef-802d6c0fdeaa").dxDateBox({
        'type': "date",
        'min': new Date()
    });
    $("#2d4ae4ef-3aa5-4f50-8fe5-36db0d8c5b4d").dxDateBox({
        'type': "date",
        'min': new Date()
    });
}, 1000);