let array = [5, 7,2,3,4,1,6]

function quickSort(arr, left, right) {
	let index;

	//We want to check if we even need to do the sorting
	if (arr.length > 1)
	{
		//We first sort the function, and return the left array index
		index = sortingUsingPivot(arr, left, right);

		//If there are more elements on the left side of pivot that needs to be sorted
		if (left < index - 1)
		{
			//will put the entire left of the array into the quicksort again
			quickSort(arr, left, index - 1);
		}

		//If there are more elements on the right side of pivot that needs to be sorted
		if (index < right) 
		{
			//will put the entire right of the array into the quicksort again
			quickSort(arr, index, right);
		}
	}
} 

function sortingUsingPivot(arr, left, right) {
	console.log("We are sorting:", arr)
	//We are using the middle element of the array as our pivot
	let pivot = arr[Math.floor((right + left) / 2)];
	let l = left; //This is keeping track of left pointer
	let r = right; //this is keeping track of right pointer

	console.log("Left", left, "Pivot", Math.floor((right + left) / 2), "right", right, pivot)

	while (l <= r) 
	{
		while (arr[l] < pivot)
		{
			l++;
		}

		while (arr[r] > pivot) 
		{
			r--;
		} 

		if (l <= r) {
			swap(arr, l, r);
			l++;
			r--;
		}
	}

	console.log("Sorting End:",l, pivot, r);
	return l;
}

function swap(arr, leftIndex, rightIndex) {
	//We basically just swap the two items from the two different index
	let temp = arr[leftIndex];
	arr[leftIndex] = arr[rightIndex];
	arr[rightIndex] = temp;
}

console.log("Before QuickSort", array);
quickSort(array, 0, array.length - 1);
console.log("After QuickSort", array);