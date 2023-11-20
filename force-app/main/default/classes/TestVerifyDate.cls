@isTest
public class TestVerifyDate {

    @isTest
    public static void  TestSetEndOfMonthDate() {

        date date1 = date.newInstance(2022, 9, 15);
        date date2 = date.newInstance(2019, 9, 15);        
        date date3 = date.newInstance(2022, 9, 20);        
        
        Date newdate1 = VerifyDate.CheckDates(date1, date2);
        Date newdate2 = VerifyDate.CheckDates(date1, date3);

        System.assertEquals(Date.newInstance(2022, 9, 30), newdate1);
        System.assertEquals(Date.newInstance(2022, 9, 20), newdate2);

    }
}