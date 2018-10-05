function arraySortedOrNot(int arr[], int n)
    {

        // Array has one or no element
        if (n == 0 || n == 1)
            return true;

        for (int i = 1; i < n; i++)

            // Unsorted pair found
            if (arr[i-1] > arr[i])
                return false;

        // No unsorted pair found
        return true;
    }

    // Function that returns 0 if a pair
        // is found unsorted
        function arraySortedOrNot(arr, n) {
            // Array has one or no element or the
            // rest are already checked and approved.
            if (n == 1 || n == 0)
                return 1;

            // Unsorted pair found (Equal values allowed)
            if (arr[n-1] < arr[n-2])
                return 0;

            // Last pair was sorted
            // Keep on checking
            return arraySortedOrNot(arr, n-1);
      }



    function main (arr)  {
        // var arr = [20, 23, 23, 45, 78, 88];
        var n = arr.length;
        if (arraySortedOrNot(arr, n) !=0 )
            console.log("Yes");
        else
            console.log("No");
    }
