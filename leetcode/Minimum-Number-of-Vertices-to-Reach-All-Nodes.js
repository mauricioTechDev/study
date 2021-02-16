/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
//  https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/

var findSmallestSetOfVertices = function(n, edges) {
    let map = {};
//     create a map where the key is signifies a node and the values an array of nodes that leed to the key
    for(let i = 0; i < edges.length; i++){
        if(!map[edges[i][0]]) {
            map[edges[i][0]] = [];
        }
        if(map[edges[i][1]]){
            map[edges[i][1]].push(edges[i][0])
        }
        if(!map[edges[i][1]]) {
            map[edges[i][1]] = [edges[i][0]];
        }
        
    }
    let ans = [];
//     if a node has no other node that points to it then push into ans array
    for(const el in map){
        if(map[el].length === 0){
            ans.push(el)
        }
    }
//     retrun all nodes that have no pointers pointing at it
    return ans
};
