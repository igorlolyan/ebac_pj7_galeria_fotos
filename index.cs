using System; 
using System.Globalization;
class URI {

    static void Main(string[] args) { 

        int  diaI,diaF,horaI,horaF,minutoI,minutoF,segundoI,segundoF,w,x,y,z;
        diaI = int.Parse(Console.ReadLine());

        string[] vet1,vet2;
        vet1= Console.ReadLine().Split(' ');
        horaI = int.Parse(vet1[0]);
        minutoI = int.Parse(vet1[1]);
        segundoI = int.Parse(vet1[2]);

        diaF = int.Parse(Console.ReadLine());
        vet2= Console.ReadLine().Split(' ');
        horaF = int.Parse(vet2[0]);
        minutoF = int.Parse(vet2[1]);
        segundoF = int.Parse(vet2[2]);

        if(horaI == horaF  horaI > horaF){
            w = diaF - diaI - 1;
        }
        else{
            w = diaF- diaI;
        }

        if(horaI>horaF){
            x = 24 - (horaI - horaF);
        }
        else{
            x = horaF - horaI;
        }

        if(minutoI > minutoF){
            y = 60 - (minutoI - minutoF);
        }
        else{
            y = minutoF-minutoI;
        }

        if(segundoI < segundoF  segundoI == segundoF){
            z = segundoF - segundoI;
        }
        else{
            z = 60 - segundoI - segundoF;
        }

        Console.WriteLine($"{w} dia(s)");
        Console.WriteLine($"{x} hora(s)");
        Console.WriteLine($"{y} minuto(s)");
        Console.WriteLine($"{z} segundo(s)");
    }
}