/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var useDate = function () {
    var locale = "en";
    var _a = React.useState(new Date()), today = _a[0], setDate = _a[1];
    React.useEffect(function () {
        var timer = setInterval(function () {
            setDate(new Date());
        }, 30 * 1000);
        return function () {
            clearInterval(timer);
        };
    }, []);
    var day = today.toLocaleDateString(locale, { weekday: "long" });
    var date = today.getDate();
    var month = today.toLocaleDateString(locale, { month: "long" });
    var time12hr = today.toLocaleTimeString(locale, {
        hour: "numeric",
        hour12: true,
        minute: "numeric",
    });
    var time24hr = today.toLocaleTimeString(locale, {
        hour: "numeric",
        hour12: false,
        minute: "numeric",
    });
    return {
        day: day,
        date: date,
        month: month,
        time12hr: time12hr,
        time24hr: time24hr,
    };
};
var StyledClock = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (p) { return p.color || "pink"; });
var Clock = function (_a) {
    var color = _a.color;
    var now = useDate();
    return (React.createElement(StyledClock, { color: color },
        " ",
        React.createElement("p", null,
            now.day,
            ", ",
            now.month,
            " ",
            now.date,
            " at ",
            now.time12hr),
        " "));
};
var templateObject_1;

export { Clock };
