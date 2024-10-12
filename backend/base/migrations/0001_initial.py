# Generated by Django 5.1.2 on 2024-10-12 09:51

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='InvestmentGoal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('GoalName', models.CharField(max_length=255)),
                ('TargetValue', models.IntegerField()),
                ('TargetDate', models.DateField()),
                ('Reacurring', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='InvestmentName',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('InvestmentName', models.CharField(max_length=255)),
                ('CurrentValue', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='InvestmentPurchase',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('AmountInvested', models.IntegerField()),
                ('CurrentValue', models.IntegerField(blank=True, null=True)),
                ('InvestmentName', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.investmentname')),
            ],
        ),
        migrations.CreateModel(
            name='NetWorth',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('TotalAssets', models.IntegerField()),
                ('TotalLiabilities', models.IntegerField()),
                ('CreatedAt', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('TransactionAmount', models.IntegerField()),
                ('CreatedAt', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='SavingsGoal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('GoalName', models.CharField(max_length=255)),
                ('TargetValue', models.IntegerField()),
                ('TargetDate', models.DateField()),
                ('Reacurring', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='SubCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('SubCategory', models.CharField(max_length=255, unique=True)),
                ('SpendingLimit', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='DailyInvestmentValue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('TotalValue', models.IntegerField()),
                ('CreatedAt', models.DateField()),
                ('InvestmentName', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.investmentname')),
            ],
        ),
        migrations.CreateModel(
            name='ReacurringInvestmentPurchase',
            fields=[
                ('investmentpurchase_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='base.investmentpurchase')),
                ('DueDate', models.DateField()),
            ],
            bases=('base.investmentpurchase',),
        ),
        migrations.CreateModel(
            name='ReacurringTransaction',
            fields=[
                ('transaction_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='base.transaction')),
                ('DueDate', models.DateField(blank=True, null=True)),
            ],
            bases=('base.transaction',),
        ),
        migrations.AddField(
            model_name='investmentpurchase',
            name='SavingsGoal',
            field=models.ManyToManyField(blank=True, to='base.savingsgoal'),
        ),
        migrations.CreateModel(
            name='IncomeSource',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('IncomeSource', models.CharField(max_length=255)),
                ('Value', models.IntegerField()),
                ('Reacurring', models.BooleanField(default=False)),
                ('SavingsGoal', models.ManyToManyField(blank=True, null=True, to='base.savingsgoal')),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Category', models.CharField(max_length=255)),
                ('SpendingLimit', models.IntegerField()),
                ('SubCategory', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.subcategory')),
            ],
        ),
        migrations.CreateModel(
            name='Vendor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Vendor', models.CharField(max_length=255)),
                ('SpendingLimit', models.IntegerField(blank=True, null=True)),
                ('Category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.category')),
            ],
        ),
        migrations.AddField(
            model_name='transaction',
            name='Vendor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.vendor'),
        ),
    ]