enum NoYes {
    No = 'no',
    Yes = 'yes',
}

function toChinese(value: NoYes | string) {
    switch (value) {
        case NoYes.No:
            return '否';
        case NoYes.Yes:
            return '是';
    }
}

toChinese('no');
