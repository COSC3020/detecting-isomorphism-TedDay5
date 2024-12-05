# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

Worst-case complexity: $\Theta(n! * n^3)$

are_isomorphic has 2 for loops which go over n elements each, $2n$ = $\Theta(n)$
is_valid has nested for loops going over n elements, $n * n$ = $\Theta(n^2)$
function build_node_connections has the standard sorting function and uses mapping, $\Theta(nlogn)$
mapping has all the permutations of vertices resulting in, $\Theta(n!)$

$n * (n! * n^2) + nlogn + n$ = $\Theta(n! * n^3)$

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”
