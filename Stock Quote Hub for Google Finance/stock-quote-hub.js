/* Quote */
var quote = document.getElementById('gbqfq').getAttribute('value');
quote = quote.replace("NYSE:", "");
/* Data */
var iconFinviz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEMElEQVRo3u3X7VMTRxwHcP8qaEBBgUlMDKClBZRigDrV4UEcRnkSLVieNCgPDQiFEEJJCBDlQXm0QGfKSCsdnoIaHksdAgQwJCQBcne7v75Ye8NDcYanOp3uzb7Z7+3e7eeyt3s5Af/x4wQFUAAFUAAFUAAFUAAFUAAFUAAFUAAFUAAFHBtgfWNj1PC6rf2n1rYXhrG3LhdzVLdHGCzr2O46NgCHkP7Js3MBF+UPFdFxiW4CoZtAGHb5msm0cPjRswiK+zcjGhzfPHUMmrhjAairdZ95nvX0OmeaXxgaNnicEhODRqs/PGB2FcnqHaQoXm4ePWB+YdHbJ8BNIBRLQ9fsdoxxcuo9N4HQ/3zY9Mzs4QF2F0547pTVOyIbHN1T7NEDmlvayfOW+Ifa7Q4AsNnWRkZfW602jkM75wN3kDmw4sS//MG+MXMshwDA6VzHGB8NACF0Nz2XAE77Bj4uUylVGlKycvKTUjJIs+XlleetXbeS0quqdWt2e1m5OupKfHRs4quBofGJqapqHd9LV9c4PTNrs61pavVKlUalrp0zzVtWVzs6e1LTMpWVNQDQ2dVT+P0PSpWmskpb39CkUmtJX/WPur1gewLkeQp3DxEB7C5x8ckIoZz7Bad9A0lyX14UFn6Nb3BWEmy12mq0DXySmf0IIQQArwYGBSfFzS0dBYVlZ3zPk7PFJUoAUBRXuHuISh5XmuYX9U9a+AHI8xT7/gXM5qWsnEekv7dPgNE4ubi4dCn86gfAjRQAeNk/wI/vVlJ6T29fxNdxfDIz8+fGxqZIEkyqgRfCnU4nAAwNG2KvJ2OMx8en+MYEEJ9wu0hRjjG2WFalgZfIKbE0xLJqPcg7kF9Yyk+hlfcWAJBFxmwFGI2T/AiUKg0AaLT6LYBZACivqOaT3p/7AKC0rKqv7zfyRu0AyPMUCCGMce6DIv5UY1PrAV/iAwB0dY07ACsr773OBJDkZuK3LMelpmWyLPuPAJIPj4x5nJKQPOrKdRfDfEoAAGRm81MxsKOju7GpjeS7AQDgYhh+Hnp6SQYHRwHgI0vTvwGYmJgWnPywA1786qrVtvYRQG3dUz7M+E6OEAaAlmcdZAH4NACE0I2E2yRUFFfw198NMJuXfIWfk0Qo/pJ8sLw1TsiiYve9jB4hAAD6f/3d3UPk7RPw7t3cXgCMceqdLD6prqnHGI+Mjl34QhYXn7LvKTRnWki4ecdPFOQnChJLQzq7eicnp4OCI0kii4wxjL2p0TaQqp8oKP3eA/PScnZuAZ+o1LXc39uzi2EuR8Sk3c3mHyTGuKm5jW+cmJzR3tktkgSTqsQ/9GF+SXRcolga4icKyi8sPchOzGw7WI7jttZ3VBmG2dVl2+pBrrA92X4DlmX2OHZ/udB/ZBRAARRAARRAARRAARRAARRAARRAARRAAf9zwF/xICESvCwtwQAAAABJRU5ErkJggg==";
var iconNasdaq = "data:image/png;base64,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"

if (quote !== "") {
    /* Create HTML content container */
    var div = document.createElement('div');
    /* Add Finviz */
    div.appendChild(createHub("https://finviz.com/quote.ashx?t=" + quote, iconFinviz));
    /* Add Nasdaq */
    div.appendChild(createHub("https://www.nasdaq.com/symbol/" + quote + "/analyst-research", iconNasdaq));
    /* Append HTML to page content */
    document.body.appendChild(div);
    /* Set container attributes */
    div.setAttribute("style", "position: absolute; top: 0px; left: 0px; z-index: 999; border:1px solid #CCC; padding: 5px 0px 5px 5px; margin: 5px;");
}

/* Create link to another source/site */
function createHub(href, icon) {
    var link = document.createElement('a');
    var img = document.createElement('img');

    link.setAttribute("target", "_blank");
    link.setAttribute("href", href);
    img.setAttribute("src", icon);
    img.setAttribute("style", "padding-right: 5px;");
    link.appendChild(img);

    return link;
}