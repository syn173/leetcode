/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    var tmp = nums1;
    nums1 = nums2;
    nums2 = tmp;
  }
  var len1 = nums1.length;
  var len2 = nums2.length;
  var isOdd = (len1 + len2) & 1;
  var leftHalfLen = (len1 + len2 + 1) >> 1;
  let aMinCount = 0, aMaxCount = len1;
  var aCount, bCount, leftEnd, rightEnd;
  while(aMinCount <= aMaxCount) {
    aCount = aMinCount + ((aMaxCount - aMinCount) >> 1);
    bCount = leftHalfLen - aCount;
    if (aCount > 0 && nums1[aCount - 1] > nums2[bCount]) {
      aMaxCount = aCount - 1;
    } else if (aCount < len1 && nums1[aCount] < nums2[bCount - 1]){
      aMinCount = aCount + 1;
    } else {
      leftEnd = aCount == 0 ? nums2[bCount - 1] : bCount == 0 ? nums1[aCount - 1] : Math.max(nums1[aCount-1], nums2[bCount-1]);
      if (isOdd) {
        return leftEnd;
      }
      rightEnd = aCount == len1 ? nums2[bCount] : bCount == len2 ? nums1[aCount] : Math.min(nums1[aCount], nums2[bCount]);
      return (leftEnd + rightEnd) / 2;
    }
  }
};

var nums1 = [1, 3]
var nums2 = [2]
// var nums1 = [1, 2]
// var nums2 = [3, 4]
console.log(findMedianSortedArrays(nums1, nums2));