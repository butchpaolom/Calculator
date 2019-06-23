var current_val="";
var dec=0;
var op=0;
        var out_="";
        var m="";
        function get_val(id_) 
        {
            if ((document.getElementById(id_).value == "+")||(document.getElementById(id_).value == "-")||(document.getElementById(id_).value == "*")||(document.getElementById(id_).value == "/"))
                {
                    if (current_val.substr(-1) == document.getElementById(id_).value)
                        {
                            console.log("sameas prev");
                            console.log(current_val.substr(-1));
                            console.log(document.getElementById(id_).value)
                            return;
                        }
                    if ((current_val.substr(-1) == "+")&&((document.getElementById(id_).value == "/")||(document.getElementById(id_).value == "*")))
                        {
                            return;
                        }
                    if ((current_val.substr(-1) == "/")&&((document.getElementById(id_).value == "*")||(document.getElementById(id_).value == "+")))
                        {
                            return;
                        }
                    if ((current_val.substr(-1) == "*")&&((document.getElementById(id_).value == "/")||(document.getElementById(id_).value == "+")))
                        {
                            return;
                        }
                    if ((current_val.substr(-1) == "-")&&((document.getElementById(id_).value == "/")||(document.getElementById(id_).value == "*")||(document.getElementById(id_).value == "+")))
                        {
                            console.log(current_val.substr(-1));
                            console.log("what");
                            return;
                        }
                    dec=0;
                }
            if (document.getElementById(id_).value == ".")
                {
                    if (dec==0)
                        {
                            document.getElementById("output_").innerHTML += document.getElementById(id_).value;
                            current_val += document.getElementById(id_).value;
                            out_=0;
                            dec=1;
                        }
                }
            if (document.getElementById(id_).value != ".")
                {
                    document.getElementById("output_").innerHTML += document.getElementById(id_).value;
                    current_val += document.getElementById(id_).value;
                    out_=0;
                }
        }
        function solve_()
        {
            out_=eval(current_val.replace(/\b0(\d+)\b/g, '$1'));
            document.getElementById("ans_").innerHTML = out_;
        }
        function erase_()
        {
            var newVal = current_val.slice(0, -1);
            current_val = newVal;
            document.getElementById("output_").innerHTML = current_val;     
        }
        function clear_()
        {
            current_val = "";
            document.getElementById("ans_").innerHTML = 0;
            document.getElementById("output_").innerHTML = current_val;
            out_=0;
            dec=0;
        }
        function m_save()
        {
            m=out_;
        }
        function m_out()
        {
            current_val += m;
            document.getElementById("output_").innerHTML += m;
        }
        function m_clear()
        {
            m="";
            dec=0;
        }
        function bin_()
        {
            out_= (out_).toString(2)
            document.getElementById("ans_").innerHTML = out_;
        }
        