package com.example.act201025

import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel

class CountViewModel : ViewModel() {

    val count = mutableStateOf(0)

    fun increment() {
        count.value++
    }
}