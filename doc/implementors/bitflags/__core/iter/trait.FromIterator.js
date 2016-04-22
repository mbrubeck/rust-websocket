(function() {var implementors = {};
implementors['bitflags'] = ["impl&lt;T&gt; <a class='trait' href='bitflags/__core/iter/trait.FromIterator.html' title='bitflags::__core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='bitflags/__core/vec/struct.Vec.html' title='bitflags::__core::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='bitflags/__core/iter/trait.FromIterator.html' title='bitflags::__core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='bitflags/__core/string/struct.String.html' title='bitflags::__core::string::String'>String</a>&gt; for <a class='struct' href='bitflags/__core/string/struct.String.html' title='bitflags::__core::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='bitflags/__core/iter/trait.FromIterator.html' title='bitflags::__core::iter::FromIterator'>FromIterator</a>&lt;&amp;'a <a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.str.html'>str</a>&gt; for <a class='struct' href='bitflags/__core/string/struct.String.html' title='bitflags::__core::string::String'>String</a>","impl <a class='trait' href='bitflags/__core/iter/trait.FromIterator.html' title='bitflags::__core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.char.html'>char</a>&gt; for <a class='struct' href='bitflags/__core/string/struct.String.html' title='bitflags::__core::string::String'>String</a>","impl&lt;K, V, S&gt; <a class='trait' href='bitflags/__core/iter/trait.FromIterator.html' title='bitflags::__core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.tuple.html'>(</a>K, V<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='bitflags/__core/collections/struct.HashMap.html' title='bitflags::__core::collections::HashMap'>HashMap</a>&lt;K, V, S&gt; <span class='where'>where S: <a class='trait' href='bitflags/__core/hash/trait.BuildHasher.html' title='bitflags::__core::hash::BuildHasher'>BuildHasher</a> + <a class='trait' href='bitflags/__core/default/trait.Default.html' title='bitflags::__core::default::Default'>Default</a>, K: <a class='trait' href='bitflags/__core/cmp/trait.Eq.html' title='bitflags::__core::cmp::Eq'>Eq</a> + <a class='trait' href='bitflags/__core/hash/trait.Hash.html' title='bitflags::__core::hash::Hash'>Hash</a></span>","impl&lt;T, S&gt; <a class='trait' href='bitflags/__core/iter/trait.FromIterator.html' title='bitflags::__core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='bitflags/__core/collections/struct.HashSet.html' title='bitflags::__core::collections::HashSet'>HashSet</a>&lt;T, S&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/cmp/trait.Eq.html' title='bitflags::__core::cmp::Eq'>Eq</a> + <a class='trait' href='bitflags/__core/hash/trait.Hash.html' title='bitflags::__core::hash::Hash'>Hash</a>, S: <a class='trait' href='bitflags/__core/hash/trait.BuildHasher.html' title='bitflags::__core::hash::BuildHasher'>BuildHasher</a> + <a class='trait' href='bitflags/__core/default/trait.Default.html' title='bitflags::__core::default::Default'>Default</a></span>","impl&lt;T&gt; <a class='trait' href='bitflags/__core/iter/trait.FromIterator.html' title='bitflags::__core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='bitflags/__core/collections/binary_heap/struct.BinaryHeap.html' title='bitflags::__core::collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/cmp/trait.Ord.html' title='bitflags::__core::cmp::Ord'>Ord</a></span>","impl&lt;A&gt; <a class='trait' href='bitflags/__core/iter/trait.FromIterator.html' title='bitflags::__core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='bitflags/__core/collections/struct.VecDeque.html' title='bitflags::__core::collections::VecDeque'>VecDeque</a>&lt;A&gt;","impl&lt;A&gt; <a class='trait' href='bitflags/__core/iter/trait.FromIterator.html' title='bitflags::__core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='bitflags/__core/collections/linked_list/struct.LinkedList.html' title='bitflags::__core::collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl&lt;K, V&gt; <a class='trait' href='bitflags/__core/iter/trait.FromIterator.html' title='bitflags::__core::iter::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.tuple.html'>(</a>K, V<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='bitflags/__core/collections/struct.BTreeMap.html' title='bitflags::__core::collections::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='bitflags/__core/cmp/trait.Ord.html' title='bitflags::__core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='bitflags/__core/iter/trait.FromIterator.html' title='bitflags::__core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='bitflags/__core/collections/struct.BTreeSet.html' title='bitflags::__core::collections::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/cmp/trait.Ord.html' title='bitflags::__core::cmp::Ord'>Ord</a></span>","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/iter/trait.FromIterator.html' title='bitflags::__core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='enum' href='bitflags/__core/borrow/enum.Cow.html' title='bitflags::__core::borrow::Cow'>Cow</a>&lt;'a, <a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.slice.html'>[</a>T<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.slice.html'>]</a>&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/clone/trait.Clone.html' title='bitflags::__core::clone::Clone'>Clone</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
