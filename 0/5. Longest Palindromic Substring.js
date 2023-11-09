/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var maxI = 0, maxJ = 0, maxL = 1, i, ii, jj, pre, now;
  var len = s.length;
  var dp = Array(1048576);

  function setDp(i, j, v) {
    dp[(i<<10)+j] = v;
  }

  function getDp(i, j) {
    return dp[(i<<10)+j] || 0;
  }

  for(i = 0; i < len; ++i) {
    setDp(i, i, 1);
    for(ii = i - 1, jj = i + 1; ii >=0 && jj < len; --ii, ++jj) {
      pre = getDp(ii + 1, jj - 1);
      if (!pre || s[ii] != s[jj]) {
        setDp(ii, jj, 0);
        continue;
      }

      now = pre + 2;
      setDp(ii, jj, now);
      if (now > maxL) {
        maxL = now;
        maxI = ii;
        maxJ = jj;
      }
    }

    if (s[i] === s[i+1]) {
      setDp(i, i + 1, 2);
      if (maxL < 2) {
        maxL = 2;
        maxI = i;
        maxJ = i + 1;
      }
    } else {
      setDp(i, i + 1, 0);
    }
    for (ii = i - 1, jj = i + 2; ii >= 0 && jj < len; --ii, ++jj) {
      pre = getDp(ii + 1, jj - 1);
      if (!pre || s[ii] != s[jj]) {
        setDp(ii, jj, 0);
        continue;
      }
      now = pre + 2;
      setDp(ii, jj, now);
      if (now > maxL) {
        maxL = now;
        maxI = ii;
        maxJ = jj;
      }
    }
  }
  return s.substring(maxI, maxJ+1);
};

console.log(longestPalindrome("cyyoacmjwjubfkzrrbvquqkwhsxvmytmjvbborrtoiyotobzjmohpadfrvmxuagbdczsjuekjrmcwyaovpiogspbslcppxojgbfxhtsxmecgqjfuvahzpgprscjwwutwoiksegfreortttdotgxbfkisyakejihfjnrdngkwjxeituomuhmeiesctywhryqtjimwjadhhymydlsmcpycfdzrjhstxddvoqprrjufvihjcsoseltpyuaywgiocfodtylluuikkqkbrdxgjhrqiselmwnpdzdmpsvbfimnoulayqgdiavdgeiilayrafxlgxxtoqskmtixhbyjikfmsmxwribfzeffccczwdwukubopsoxliagenzwkbiveiajfirzvngverrbcwqmryvckvhpiioccmaqoxgmbwenyeyhzhliusupmrgmrcvwmdnniipvztmtklihobbekkgeopgwipihadswbqhzyxqsdgekazdtnamwzbitwfwezhhqznipalmomanbyezapgpxtjhudlcsfqondoiojkqadacnhcgwkhaxmttfebqelkjfigglxjfqegxpcawhpihrxydprdgavxjygfhgpcylpvsfcizkfbqzdnmxdgsjcekvrhesykldgptbeasktkasyuevtxrcrxmiylrlclocldmiwhuizhuaiophykxskufgjbmcmzpogpmyerzovzhqusxzrjcwgsdpcienkizutedcwrmowwolekockvyukyvmeidhjvbkoortjbemevrsquwnjoaikhbkycvvcscyamffbjyvkqkyeavtlkxyrrnsmqohyyqxzgtjdavgwpsgpjhqzttukynonbnnkuqfxgaatpilrrxhcqhfyyextrvqzktcrtrsbimuokxqtsbfkrgoiznhiysfhzspkpvrhtewthpbafmzgchqpgfsuiddjkhnwchpleibavgmuivfiorpteflholmnxdwewj"));