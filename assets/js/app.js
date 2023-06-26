

let actionBtn = document.querySelector('button');

actionBtn.addEventListener('click', function(){
    let D = new Date(1900,0,1);
    let inn = userCode.value;
    let innDate = inn.substring(0, 5) * 1 - 1;
    inn = inn.split('');


    if(inn[8] % 2 == 0){
        checkGender.innerHTML = 'Пол: женский';
    } else {
        checkGender.innerHTML = 'Пол: мужской';
    }

    if (inn[0] * 1 < 5 && check_sum() == true){
        D.setDate(D.getDate() + innDate);
        let curr_date = D.getDate();
        let curr_month = D.getMonth() + 1;
        let curr_year = D.getFullYear();
        curr_month < 10 ? curr_month = ""  + '0' + curr_month : curr_month;
        curr_date < 10 ? curr_date = "" + '0' + curr_date : curr_date;
        let birthDay = `${curr_date}` + '/' + `${curr_month}` + '/' + `${curr_year}`;

        checkBD.innerHTML = `Дата рождения: ${birthDay}`;

        check.innerHTML = 'Данные верные';

        let day = curr_date;
        let month = curr_month;
        let year = curr_year;

        let today = new Date();
        let birth = new Date(year, month, day);
        let age = today.getFullYear() - birth.getFullYear();
        let m = today.getMonth() - birth.getMonth();
            if(m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
                age --;
            }
        checkAge.innerHTML = `Возраст: ${age}`;    
    } else {
        check.innerHTML = 'Проверьте корректность ИНН!';
    }


    function check_sum(){
        let inn = userCode.value;
        inn = inn.split('');
        if ((inn[9] == ((-1 * inn[0] + 5 * inn[1] + 7 * inn[2] + 9 * inn[3] + 4 * inn[4] + 6 * inn[5] + 10 * inn[6] + 5 * inn[7] + 7 * inn[8]) % 11) % 10)) return true 
    else 
        return false
    }


});