#!/usr/bin/env python
# coding: utf-8

# In[32]:


import numpy as np
import time


# In[5]:


def gen_random(size, num_loops=1):
    """乱数発生
    
    Args:
        size: 文字長
        num_loops: 何回作成するか
    
    Returns:
        indices: インデックス
    """
    return np.random.randint(0, size, size=(num_loops, size))


# In[33]:


words = np.array('THEE MICHELLE GUN ELEPHANT'.split(' '))
generated_words = words[gen_random(words.size, 1000)]
score = np.sum(generated_words == words, axis=-1)
check = score == words.size

for w, s, c in zip(generated_words, score, check):
    print(' '.join(w), s, c)
    time.sleep(1)

