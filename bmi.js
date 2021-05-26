

        function ClearForm(form) {

            form.weight.value = "";
            form.height.value = "";
            form.bmi.value = "";
            form.my_mess.value = "";

        }

        function bmi(weight, height) {

            bmindx = weight / (height * height);
            return bmindx;
        }

        function checkform(form) {

            if (form.weight.value == null || form.weight.value.length == 0 || form.height.value == null || form.height.value.length == 0) {
                alert("\nVui lòng nhập đầy đủ thông tin về chiều cao (m) & cân nặng (kg) của bạn. \nSau đó nhấn vào nút 'Xem' để kiểm tra BMI và phần nhận xét.");
                return false;
            }

            else if (parseFloat(form.height.value) <= 0 ||
                parseFloat(form.height.value) >= 250 ||
                parseFloat(form.weight.value) <= 0 ||
                parseFloat(form.weight.value) >= 500) {
                alert("\nBạn đã nhập không đúng. Vui lòng nhập đầy đủ thông tin về chiều cao (m) & cân nặng (kg) của bạn. \nSau đó nhấn vào nút 'Xem' để kiểm tra BMI và phần nhận xét.");
                ClearForm(form);
                return false;
            }
            return true;

        }

        function computeform(form) {

            if (checkform(form)) {

                yourbmi = (bmi(form.weight.value, form.height.value));
                form.bmi.value = yourbmi;

                if (yourbmi >= 40) {
                    form.my_mess.value = "Bạn bị béo phì độ III !";
                }

                else if (yourbmi >= 35 && yourbmi < 40) {
                    form.my_mess.value = "Chỉ số BMI ở trên cho thấy bạn bị béo phì độ II !";
                }

                else if (yourbmi >= 30 && yourbmi < 35) {
                    form.my_mess.value = "Chỉ số BMI ở trên cho thấy bạn bị béo phì độ I";
                }

                else if (yourbmi >= 25 && yourbmi < 30) {
                    form.my_mess.value = "Chỉ số BMI ở trên cho thấy bạn bị thừa cân !";
                }

                else if (yourbmi >= 18.5 && yourbmi < 25) {
                    form.my_mess.value = "Chúc mừng bạn ! Bạn có chỉ số BMI bình thường !";
                }

                else if (yourbmi >= 17 && yourbmi < 18.5) {
                    form.my_mess.value = "Chỉ số BMI ở trên cho thấy bạn bị gầy độ I !";
                }

                else if (yourbmi >= 16 && yourbmi < 17) {
                    form.my_mess.value = "Chỉ số BMI ở trên cho thấy bạn bị gầy độ II ! ";
                }

                else if (yourbmi < 16) {
                    form.my_mess.value = "Chỉ số BMI ở trên cho thấy bạn bị gầy độ III ! ";
                }

            }
            return;
        }
    